import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { LoginComponent } from './login/login.component';
import { ADMIN_ROUTES } from './admin/admin.module';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './admin/admin.component';

// export const MAIN_ROUTES: Routes = [
//   {
//     path: 'admin',
//     children: ADMIN_ROUTES,
//     canActivate: [AuthGuard],
//     canActivateChild: [AuthGuard],
//   },

//   {
//     path: 'admin',
//     canActivate: [AuthGuard],
//     // below code is lazy loading it is used for site speed, when admin route then only the admin would load
//     loadChildren: () =>
//       import('./admin/admin.module').then((m) => m.AdminModule),
//   },
// ];
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    // children: MAIN_ROUTES,
    // resolve: {
    //   userLoaded: MainResolver,
    // },
  },

  // If no url found then redirect to...
  { path: '**', component: AppComponent },
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
