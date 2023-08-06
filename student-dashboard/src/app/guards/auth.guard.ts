import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './../shared/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public apiService: ApiService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

        console.log(this.apiService.isLoggedIn);
    if (this.apiService.isLoggedIn !== true) {
      window.alert('Access not allowed!');
      this.router.navigate(['']);
    }
    return true;
  }
}