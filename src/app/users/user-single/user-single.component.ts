import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { UsersModule } from '../users.module';

@Component({
  selector: 'app-user-single',
  template: `
    <section class="section">
      <div class="container">
      
        <div class="card" *ngIf="user">
          <img [src]="user.avatar_url">
          <h2>{{ user.login }}</h2>
        </div>
      
      </div>
    </section>
  `,
  styles: [
  ]
})
export class UserSingleComponent implements OnInit {
  
  user; // property to hold our user when we eventually grab them from github api
  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService
          .getUser(username)
          .subscribe(user => this.user = user);
    });
  }

}
