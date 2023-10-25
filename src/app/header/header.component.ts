import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Options } from '../options';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
  {{Options.name}}
  <h1>login {{title}}</h1>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  "title" : string = "" ;
  
  explication:Options={
    name : "karim",
    age : 23 
  }
}
