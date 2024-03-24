import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Added Validators
import { AuthService } from '../register/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-page',
  templateUrl: './reset-page.component.html',
  styleUrls: ['./reset-page.component.css']
})
export class ResetPageComponent {

  fp_token!:any;

  constructor(private authService:AuthService,private activatedRoute:ActivatedRoute){
      this.activatedRoute.params.subscribe((parameters:any)=>{
        this.fp_token=parameters;
      })
      this.resetPassword();
  }

  resetPasswordForm = new FormGroup({
    password: new FormControl(), 
    confirmPassword: new FormControl(),
    token:new FormControl(this.fp_token.value)
  });

  resetPassword():void {
    console.log(this.resetPasswordForm);
    this.authService.updatePassword(this.resetPasswordForm.value).subscribe((val)=>{
      console.log("password updated");
    })

  
  }

}
