import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { LoginComponent } from './login/login.component';
import { ADMIN_ROUTES } from './admin/admin.module';
import { AuthGuard } from './guards/auth.guard';

export const MAIN_ROUTES: Routes = [
  {
    path: 'admin',
    children: ADMIN_ROUTES,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },

  {
    path: 'admin',
    canActivate: [AuthGuard],
    // below code is lazy loading it is used for site speed, when admin route then only the admin would load
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];
const routes: Routes = [
  {
    path: 'login',
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
