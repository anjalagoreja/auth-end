import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../register/auth.service';

@Component({
  selector: 'app-email-page',
  templateUrl: './email-page.component.html',
  styleUrls: ['./email-page.component.css']
})
export class EmailPageComponent {

  constructor(private authService:AuthService){
    
  }

  createForm=new FormGroup({
    email:new FormControl()
  })

  submit():void{
    console.log("email submitted");
    console.log(this.createForm);
    this.authService.validateEmail(this.createForm.value).subscribe((val)=>{
      console.log(this.createForm);
    })
  }
  

}
