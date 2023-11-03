import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-header [title]=user ></app-header>
    <app-formx></app-formx>
    <app-link></app-link>
    <app-home></app-home>


  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ;
  user = "Dear";
}
