import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username: '';
  password: '';
  constructor(private router: Router) {}

  //   isUser(): boolean {
  //     if (username === "user" && password === "user") {
  //       return username;
  //     }
  //     return false;
  //   }

  //   isAdmin(): boolean {
  //     if (username === "admin" && password === "admin") {
  //       return true;
  //     }
  //     return false;
  //   }

  login(username, password) {
    // return ({ username, password })
    //     .pipe(map(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         // localStorage.setItem('user', JSON.stringify(user));
    //         // this.userSubject.next(user);
    //         return user;
    //     }));
  }
}
