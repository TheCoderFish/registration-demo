import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionService } from '../services/common/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  constructor(private router:Router,
    private sessionService:SessionService) {
  }

  login() {
    if (this.loginForm.valid) {
      const response = this.sessionService.valiDateCredentials(this.loginForm.getRawValue());
      if(response.validUser){
        this.router.navigate(['session/home']);
      }
    }
  }

}
