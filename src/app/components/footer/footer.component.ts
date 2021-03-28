import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
    <div class="container">
    <div class="content has-text-centered">
    <p>
      Made with <3 by <a target=_blank href="https://github.com/COAB1/training-angular">Carolina Brito</a>
    </p>
  </div>
  </div>
  </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
