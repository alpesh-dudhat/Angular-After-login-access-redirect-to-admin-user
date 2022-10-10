import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserModule, USER_ROUTES } from './user/user.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ADMIN_ROUTES } from './admin/admin.module';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';

export const MAIN_ROUTES: Routes = [
  {
    path: 'user',
    children: USER_ROUTES,
    canActivate: [UserGuard],
    canActivateChild: [UserGuard],
  },
  {
    path: 'admin',
    children: ADMIN_ROUTES,
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
  },
];
const routes: Routes = [
  {
    path: 'login',
    data: { label: 'Login' },
    pathMatch: 'prefix',
    component: LoginComponent,
  },
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: MAIN_ROUTES,
    // resolve: {
    //   userLoaded: MainResolver,
    // },
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    UserModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, LoginComponent],
  bootstrap: [AppComponent],
  providers: [AuthGuard],
})
export class AppModule {}
