import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userId: any;
  noteId: any;
  registerUser!: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private cookieService: CookieService,
    private authService: AuthService
  ) {
    this.userId = +this.cookieService.get('userId');
  }

  ngOnInit(): void {
    this.createForm(); 
  }

  createForm(): void {
    this.registerUser = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      confirm_password: new FormControl(),
      email: new FormControl(),
      fullname: new FormControl(),
      phone_no: new FormControl()
    });
  }

  submit(): void {
    this.authService.register(this.registerUser.value).subscribe((val) => {
      console.log("done");
      this.route.navigate(['/login']);
    });
  }
}
