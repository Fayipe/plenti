import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Helpers } from '../app.helpers';
import { StorageKey } from '../app.enums';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public _helpers: Helpers, private router: Router) { }
  async getAccesToken() {
    const accessToken = await this._helpers.get(StorageKey.accessToken);
    if (accessToken) {
      return true;
    } else {
      return false;
    }
  }
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let islohin = await this.getAccesToken();
    if (islohin) {
      // this.router.navigate([state.url]);
      return true;
    } else {
      this.router.navigate(['login']);
      // return false;
    }
  }
}
