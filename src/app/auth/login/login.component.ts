import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; 
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService:AuthService,private router: Router,private cookieService:CookieService){

  }

  createForm=new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  })
  

  login():void{
    this.authService.loginUser(this.createForm.value as { username: string; password: string }).subscribe((val)=>{
      console.log("createform",this.createForm.value)
      console.log("done")
      this.router.navigate(['/home']);
      console.log("value:",val)
      if(val.validYN){
        this.cookieService.set("userId",val.userid)
        console.log("userId",val.userid)
        this.cookieService.set("username",val.username)
        console.log("username",val.username)
        this.cookieService.set("token",val.token)
        console.log("token",val.token)
        this.cookieService.set("role",val.role)
        this.cookieService.set("isLoggedIn","1")
      }
    })
  }
}
