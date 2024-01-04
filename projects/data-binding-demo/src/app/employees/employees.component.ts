import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
    firstName:string='Akash';
    lastName:string='Tupe';
    email:string='akashtupe@gamil.com';
    dob:string='07/05/1997'
    city:string='Yavatmal';
}
