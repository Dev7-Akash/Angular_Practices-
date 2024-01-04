import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EmployeesComponent } from './employees/employees.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsAPIComponent } from './product-details-api/product-details-api.component';
import { ClassBindingComponent } from './ClassBindiingDemo/class-binding/class-binding.component';
import { StylesBindingComponent } from './StylesBindingDemo/styles-binding/styles-binding.component';
import { FlipkartAppComponent } from './FlipkartAppDemo/flipkart-app/flipkart-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EmployeesComponent,
    ProductDetailsAPIComponent,
    ClassBindingComponent,
    StylesBindingComponent,
    FlipkartAppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  
  ],
  providers: [],
  bootstrap: [FlipkartAppComponent]
})
export class AppModule { }
