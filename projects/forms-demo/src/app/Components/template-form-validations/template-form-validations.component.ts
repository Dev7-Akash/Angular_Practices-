import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form-validations',
  templateUrl: './template-form-validations.component.html',
  styleUrls: ['./template-form-validations.component.css']
})
export class TemplateFormValidationsComponent {
  public errorMsg:string="";
  public CityChanged(e:any){
    if(e.target.value==" "){
      this.errorMsg = "Please select the city";
    }
    else{
      this.errorMsg = "";
    }
  }
}
