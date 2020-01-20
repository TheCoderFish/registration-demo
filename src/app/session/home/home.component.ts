import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/common/session.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public registeredUser$: Observable<any>;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    // console.log(this.sessionService.registeredUserDetails);
    this.registeredUser$ = this.sessionService.getRegisteredUserDetails();
  }
}
