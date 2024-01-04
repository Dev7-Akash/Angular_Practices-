import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-builder-validations',
  templateUrl: './form-builder-validations.component.html',
  styleUrls: ['./form-builder-validations.component.css']
})
export class FormBuilderValidationsComponent {
 
  constructor(private fb:FormBuilder){}


  public frmRegister = this.fb.group({
    Name:this.fb.control(" ",[Validators.required,
      Validators.minLength(4),Validators.maxLength(10)]),
    Price:this.fb.control(10,[Validators.pattern(/\+91\d{10}/)]),
    frmVendor:this.fb.group({
      VendorName:this.fb.control(''),
      VendorRating:this.fb.control(0)
    }),
    Photos:this.fb.array([this.fb.control('')])
  })


  get Price(){
    return this.frmRegister.get("Price");
  }
  get Name(){
    return this.frmRegister.get('Name');
  }


  get VendorName(){
    return this.frmRegister.get('VendorName');
  }
  get VendorRating(){
    return this.frmRegister.get('VendorRating');
  }
  get Photos():FormArray{
    return this.frmRegister.get('Photos') as FormArray;
  }


  public Register(data:any){
    alert(JSON.stringify(data));
  }
  public Addmore(){
    this.Photos.push(this.fb.control(''));
  }
  public RemovePhoto(i:number){
    this.Photos.removeAt(i);
  }

}
