import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.loginform.value);

    if (this.loginform.valid) {
      this.authService.login(this.loginform.value).subscribe(
        (result) => {
          console.log(result);
          this.route.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
