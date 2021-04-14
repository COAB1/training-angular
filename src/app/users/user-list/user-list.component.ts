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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
