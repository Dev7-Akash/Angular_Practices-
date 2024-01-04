import { Component } from '@angular/core';


@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent {
  public input:any = "Welcome to Naresh IT";
  public employees:{empID:number,empName:string,gender:string}[] = [
    {empID:101,empName:'Akash',gender:'Male'},
    {empID:102,empName:'Rushi',gender:'Male'},
    {empID:103,empName:'Billo',gender:'Female'},
    {empID:104,empName:'Rohit',gender:'Male'},
    {empID:105,empName:'Akshara',gender:'Female'}
  ];
}
