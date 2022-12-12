import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
 // styleUrls: ['./student.component.css']
 styles:[`
  table{
  background-color:rgb(3, 56, 70) ;
  color: rgb(12, 133, 240);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
  font-size: large;
  border-collapse: collapse;
}
td{
  border: 1px solid black;
}
`]
})
export class StudentComponent implements OnInit {
  Name:string="Prajakta";
  Email:string="prajakta@gmail.com";

  constructor() {}

  ngOnInit(): void{

  }
}
