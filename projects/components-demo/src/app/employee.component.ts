import { Component } from '@angular/core';

@Component({
    selector:'employee',
    template:`<h2>Employee Details</h2><hr> <br>
         <p>Employee Id Is:{{eno}}</p>
         <p>Employee Name Is:{{ename}}</p>
         <p>Employee Salary Is:{{salary}}</p>
         <student></student>`


})

export class EmployeeComponent{
    eno:number=111;
    ename:string='Akash';
    salary:number=8800;
}