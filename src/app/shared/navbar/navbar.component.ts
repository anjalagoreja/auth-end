import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private cookieService:CookieService,private router:Router){
    
  }
  isLoggedIn(){
    return this.cookieService.get("isLoggedIn")==='1'
  }

  logout(){
    this.cookieService.deleteAll();
    this.router.navigate(["/login"])
  }

}
