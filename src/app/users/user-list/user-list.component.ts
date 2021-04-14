import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <p>
      user-list works!
    </p>
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

