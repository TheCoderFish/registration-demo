import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder, ValidationErrors } from '@angular/forms';
import { SessionService } from '../services/common/session.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;

  public matcher = new MyErrorStateMatcher();

  constructor(private sessionService: SessionService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      image: [null, [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      addressExt: [''],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  public getErrors(name: string): ValidationErrors {
    const control: FormControl = this.registrationForm.get(name) as FormControl;
    return control.errors;
  }


  public getControl(name: string): FormControl {
    return this.registrationForm.get(name) as FormControl;
  }

  imageUpload(image: File) {
    this.registrationForm.get('image').patchValue(image);
  }

  submitForm() {
    if (this.registrationForm.valid) {
      const status = this.sessionService.registerUser(this.registrationForm.getRawValue());
      if (status) {
        console.log('User Registration Successfull');
        this.router.navigate(['session/login']);
      }
    }else{
      this.registrationForm.markAllAsTouched();
    }

  }

}
