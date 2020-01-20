import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'

import { RegistrationComponent } from './registration/registration.component';
import { SessionRoutingModule } from './session-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { AppFileUploadComponent } from './app-file-upload/app-file-upload.component';
import { HomeComponent } from './home/home.component';
import { SessionService } from './services/common/session.service';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent, AppFileUploadComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    SessionRoutingModule
  ],
  providers:[
    SessionService
  ]
})
export class SessionModule { }
