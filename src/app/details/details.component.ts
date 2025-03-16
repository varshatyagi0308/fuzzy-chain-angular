import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from '../user/state.model';

@Component({
  selector: 'app-details',
  standalone: false,
  template: `
    <h1>User Details</h1>
    <ul>
      <li *ngFor="let user of users$ | async">{{ user.name }}</li>
    </ul>
  `
})
export class DetailsComponent {
  users$: Observable<any[]>;

  constructor(private store: Store<{ user: UserState }>) {
    this.users$ = this.store.select(state => state.user.users);
  }
}
