import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formx',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div>
  <input type="text" name="" id="">
  <br>
  <input type="password" name="" id="">
  <br>
  <input id="btn" type="button" value="submit">
  </div>
  `,
  styleUrls: ['./formx.component.css']
})
export class FormxComponent {

}
