import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    data: { label: 'Home' },
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class AdminModule {}
