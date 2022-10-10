import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public registerForm!: FormGroup;
  returnUrl: string;
  loginForm: FormGroup;
  constructor(    private formBuilder: FormBuilder,private router: Router,      private route: ActivatedRoute, private authservice: AuthService,) {}

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    // const username = this.registerForm.value.username;
    // const password = this.registerForm.value.password;
    // const luser = localStorage.getItem('userename')
    // const lpass = localStorage.getItem('password')

    // if (username === luser && password === lpass){
    //     return
    // }

    this.authservice.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
        },
        error => {
            // this.alertService.error(error);
            // this.loading = false;
        });

    // this.authservice.login(username, password)
    // .pipe(first())
    // .subscribe(
    //     data => {
    //         this.router.navigate(['/user']);
    //     },
    //     error => {
    //         // this.authservice.error(error);
    //     });
  }
}
