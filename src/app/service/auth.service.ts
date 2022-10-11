import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username: '';
  password: '';
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ user, pass }: any): Observable<any> {
    if (user === 'admin' && pass === 'admin') {
      console.log('inlogin');
      this.setToken('TS2339');
      console.log('setToken');
      return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
      // return of({})
    }
    return throwError(new Error('Faild to login'));
  }
}
