import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- header -->
  <nav class="navbar">

    <!-- logo -->
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="https://bulma.io/images/bulma-logo.png">
      </a>
    </div>
  </nav>

  <!-- routes will be rendered here -->
  <router-outlet></router-outlet>

  <!-- footer -->
  <footer class="footer">
  <div class="container">
  <div class="content has-text-centered">
    <p>
      Made with <3 by <a target=_blank href="https://github.com/COAB1">Carolina Brito</a>
    </p>
  </div>
  </div>
  </footer>
`,
  styles: []
})
export class AppComponent {
  title = 'training-angular';
}
