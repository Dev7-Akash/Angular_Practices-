import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee.component';
import { StudentComponent } from './student.component';


@NgModule({
  declarations: [
    StudentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
