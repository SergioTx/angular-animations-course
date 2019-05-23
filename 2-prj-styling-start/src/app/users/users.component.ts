import { Component, OnInit, HostBinding } from '@angular/core';
import { routeFadeStateTrigger } from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routeFadeStateTrigger],
})
export class UsersComponent implements OnInit {
  @HostBinding('@routerFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
