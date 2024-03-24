import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register/auth.service';
import { Router } from '@angular/router'; 
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit{
  students!:any
  constructor(private authService:AuthService,private router:Router,private cookieService:CookieService){
    
  }

  ngOnInit(): void {
    this.student();
  }

 student():void{
  this.authService.student().subscribe({
    next:(val)=>{
      this.students=val
    },
    error:(error)=>{
      console.log("error",error)
      //redirect the error page
      if(error.status===401){
        this.router.navigate(["/login"])
      }
      if(error.status===500){
        this.router.navigate(["/contact-us"])
      }
    }
  })
 }

 isLoggedIn(){
   return this.cookieService.get("isLoggedIn")==='1'
 }
}
