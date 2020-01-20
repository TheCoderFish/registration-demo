import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionModule } from '../../session.module';

@Injectable()
export class SessionService {

  private userDetails: BehaviorSubject<any>;
  private userDetails$: Observable<any>;
  constructor() {
    this.userDetails = new BehaviorSubject(null);
    this.userDetails$ = this.userDetails.asObservable();
  }

  //Mocking a server call , if data is successfully saved then method returns true
  public registerUser(userDetails) {
    this.userDetails.next(userDetails);
    return true;
  }

  public getRegisteredUserDetails() {
    return this.userDetails$;
  }

  public valiDateCredentials(inputCredentials: any) {
    const { email, password } = inputCredentials;
    const storedValues = this.userDetails.value;
    if (email === storedValues.email && password === storedValues.password) {
      return { validUser: true }
    }
  }
}
