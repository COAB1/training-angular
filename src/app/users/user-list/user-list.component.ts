import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">

        <!-- loop over our users and give them each a card -->
          <div class="column is-4" *ngFor="let user of users | async">
            <div class="card">
              <div class="card-content">
                {{ user.login }} 
              </div>      
            </div>      
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class UserListComponent implements OnInit {

  users;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    /* 
    before ES6 was written like this 
    this.userService.getUsers().subscribe(users => {
      console.log(users); */
    this.users = this.userService.getUsers();
  };
}

