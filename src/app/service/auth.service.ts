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

  isLoggedIn(){

  }

  login(){
    
  }
}
