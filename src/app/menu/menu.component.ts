import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from '../user/user.actions';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: false,
  template: `
    <h1>Menu</h1>
    <button (click)="fetchUsers()">Fetch Users</button>
    <button (click)="goToDetails()">Go to Details</button>
  `
})
export class MenuComponent {
  constructor(private store: Store, private router: Router) {}

  fetchUsers() {
    this.store.dispatch(loadUsers());
  }

  goToDetails() {
    this.router.navigate(['/details']);
  }
}
