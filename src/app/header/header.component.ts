import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>login</h1>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
