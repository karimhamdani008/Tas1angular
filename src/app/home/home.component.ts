import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Options } from '../options';
import { OPTIONLIST } from '../mock-OptionList';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="">
     <ul>
      <li *ngFor="let one of alloptions">
       The parts of my name is : {{one.name}}
      </li>
     </ul>
    </button>
    
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    alloptions = OPTIONLIST ;

  singleoption : Options = {
    name : "name", 
    age : 18, 
  }
  submitApp(){
    console.log("xxx")
  }

}
