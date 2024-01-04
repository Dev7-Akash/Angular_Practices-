import { Component } from '@angular/core';
import { style } from '@angular/animations';

@Component({
    selector:'student',
    template:`
    <div>
    <h1>Welcome To Angular </h1>
    <h1>Student Component </h1>
    <hr> <br>
    <p>Student Id :{{sno}}</p>
    <p>Student Name :{{sname}}</p>
    <p>Student Course :{{course}}</p>
    <p>Student Fees :{{fees}}</p>
     
</div>`
,

styles:['h1{text-align:center}']


})



export class StudentComponent{

    sno:number=101;
    sname:string='Akash';
    course:string='Java';
    fees:number=2500;

}