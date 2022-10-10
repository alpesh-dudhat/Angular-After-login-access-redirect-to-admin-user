import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    localStorage.setItem('id', 'admin');
    localStorage.setItem('pass', 'admin');
    localStorage.setItem('id', 'user');
    localStorage.setItem('pass', 'user');
  }
}
