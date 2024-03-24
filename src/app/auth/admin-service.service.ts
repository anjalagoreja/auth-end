import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APP_CONSTANTS } from '../shared/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private cookieService:CookieService) { }

  canActivate():boolean{
    if(this.cookieService.get("role")===APP_CONSTANTS.ADMIN_ROLE){
      return true;
    }
    return false;
  }
}
