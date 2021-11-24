import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, filter, take, switchMap, mergeMap } from 'rxjs/operators';
import { Helpers } from '../app.helpers';
import { BaseService } from '../services/base/base.service';
import { StorageKey } from '../app.enums';
import { TABS } from '../pages/pages.constants';
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  newToken: any;
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  authState = new BehaviorSubject(false);
  constructor(
    // private segment: SegmentService,
    private _helpers: Helpers, private api: BaseService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {

        if (error.error instanceof ErrorEvent) {
          this._helpers.dismissLoader();
          // A client-side or network error occurred. Mostly network.
          console.error('An error occurred:', error.error);
          this._helpers.createAlert('Please check your network settings and try again.', 'Network Error!', null, 'ios')
            .then((alert) => alert.present());
        } else {
          console.error('Intercept error occurred:', error.error);
          if (error.status === 401) {
            if (this.refreshTokenInProgress) {
              return this.refreshTokenSubject.pipe(
                filter(result => result !== null),
                take(1),
                switchMap(() => next.handle(this.addAuthenticationToken(req)))
              );
            } else {
              this.refreshTokenInProgress = true;
              // Set the refreshTokenSubject to null so that subsequent API calls will wait until the new token has been retrieved
              this.refreshTokenSubject.next(null);
              this.authState.next(true);
              return this.refreshTokens()
                .pipe(
                  switchMap((res) => {
                    this.storeTokens(res.data);
                    // When the call to refreshToken completes we reset the refreshTokenInProgress to false
                    // for the next time the token needs to be refreshed
                    this.refreshTokenInProgress = false;
                    this.refreshTokenSubject.next(res.data.token);
                    this.newToken = res.data.token;
                    return next.handle(this.addAuthenticationToken(req));
                  }),
                  catchError(tokenError => {
                    this.refreshTokenInProgress = false;
                    // this.event.publish('auth:logout');
                    console.error(tokenError);
                    this._helpers.dismissLoader();
                    this._helpers.setRoot(TABS);
                    return throwError(tokenError);
                  }));
            }
          } else {
            console.log('error.error', error.error);
            // this.segment.track(`error:${req.url.substr(req.url.lastIndexOf("/api/"))}`, { error: error.error });
            this._helpers.createErrorToast(error.error.message);
          }

        }

        return throwError(error.error);
      }));
  }

  refreshTokens() {
    return from(Promise.all([this._helpers.getUser(), this._helpers.get(StorageKey.refreshToken)]))
      .pipe(
        mergeMap((val) => {
          console.log(val);
          const user = val[0];
          const refreshToken = val[1];
          if (user) {
            return this.api.postRefreshToken<any>(user.id, refreshToken);
          }
          return throwError('Session Expired');
        }));
  }

  storeTokens(data) {
    this.newToken = data.access_token;
    this._helpers.save(StorageKey.accessToken, data.access_token);
    this.authState.next(true);

  }

  addAuthenticationToken(req) {
    const headers = req.headers
      .set('Authorization', `Bearer ${this.newToken}`);
    const authReq = req.clone({ headers });
    return authReq;
  }
  isAuthenticated() {
    return this.authState.value;
  }
}
