import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { adminGuard } from './auth/admin.guard';
import { AdminServiceService } from './auth/admin-service.service';
import { EmailPageComponent } from './auth/email-page/email-page.component';
import { ResetPageComponent } from './auth/reset-page/reset-page.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent 
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AdminServiceService]
  },
  {
    path:'forgot-password',
    component:EmailPageComponent
  },
  {
    path:'reset/:token',
    component:ResetPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }