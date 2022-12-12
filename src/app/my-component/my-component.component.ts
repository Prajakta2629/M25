import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template:`<h1>{{name1}}</h1>
            <body>
                Hey sir,How to more about Angular?
             </body>`,
  //templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

 name1="Welcome to SoftSkill Platform";
 constructor(){}
 ngOnInit():void {

  }
}
