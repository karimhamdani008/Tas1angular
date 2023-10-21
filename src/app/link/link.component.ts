import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule],
  template: `
  <a href="">Register</a>
  `,
  styleUrls: ['./link.component.css']
})
export class LinkComponent {

}
