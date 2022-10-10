import { Injectable } from '@angular/core';
import { AuthService } from './service/auth.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authservice: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (1) {
      console.log('asd');
      // this.router.navigate(['/login']);
      this.router.navigate(['/user/home']);
      return false;
    }
    // return true;

    // if(authservice.)
  }
}
