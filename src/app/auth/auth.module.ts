import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component'
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from '../shared/contact-us/contact-us.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailPageComponent } from './email-page/email-page.component';
import { ResetPageComponent } from './reset-page/reset-page.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    EmailPageComponent,
    ResetPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    HomeComponent
  ]
})
export class AuthModule { }
