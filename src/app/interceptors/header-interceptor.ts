import { Helpers } from '../app.helpers';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { StorageKey } from '../app.enums';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private _helpers: Helpers) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenPromise = this.getToken();
    return from(tokenPromise)
      .pipe(mergeMap(token => {
        const headers = req.headers
          .set("Authorization", `Bearer ${token}`);
        const authReq = req.clone({ headers });
        return next.handle(authReq);
      }));
  }

  getToken(): Promise<string> {
    return this._helpers.get(StorageKey.accessToken);
  }
}
