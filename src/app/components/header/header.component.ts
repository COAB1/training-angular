import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-dark">

    <!-- logo -->
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="assets/img/angular-logo.png">
      </a>
    </div>

    <!-- menu -->
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" routerLink="">Home</a>
        <a class="navbar-item" routerLink="contact">Contact</a>
      </div>
    </div>
    
  </nav>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
