import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <app-header></app-header> 
    <app-formx></app-formx>
    <app-link></app-link>
    <app-home></app-home>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task1angular';
}
