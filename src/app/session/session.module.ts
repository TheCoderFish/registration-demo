import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'

import { RegistrationComponent } from './registration/registration.component';
import { SessionRoutingModule } from './session-routing.module';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    SessionRoutingModule
  ]
})
export class SessionModule { }
