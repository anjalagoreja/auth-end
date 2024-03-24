import { Injectable } from '@angular/core';
import{ HttpClient }  from "@angular/common/http"
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from 'src/app/shared/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ) { }

  register(body:any):Observable<any>{
    // console.log("body:",body)
    return this.http.post(APP_CONSTANTS.BACKEND_URL + "register",body)
  }
  loginUser(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post('http://localhost:8082/api/login', credentials);
  }
  student():Observable<any>{
    return this.http.get('http://localhost:8082/api/student',{withCredentials:true});
  }
  validate_fp_token(fp_token:string):Observable<any>{
    return this.http.post('http://localhost:8082/api/reset',{fp_token})
  }
  validateEmail(email:any):Observable<any>{
    return this.http.post('http://localhost:8082/api/sendMail',email);
  }
  updatePassword(updated_password:any):Observable<any>{
    return this.http.post('http://localhost:8082/api/updatePassword',{updated_password});
  }

}
