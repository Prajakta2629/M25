import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div>
      <h1>{{title1}}</h1> 
      <app-student>  </app-student>     
  </div>`,
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SkillSoft';
  title1='Student Details:';
}
