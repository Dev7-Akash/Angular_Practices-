import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {

  public frmRegister = new FormGroup({
    Username:new FormControl('Enter Name'),
    Age:new FormControl(0),
    Mobile:new FormControl(''),
    frmVendor:new FormGroup({
      vendorName:new FormControl(''),
      rating:new FormControl(0)
    })
  });

  get VendorName(){
    return this.frmRegister.get('vendorName');
  }
  get VendorRating(){
    return this.frmRegister.get('rating');
  }

  get Age(){
    return this.frmRegister.get('Age');
  }

  public UpdateClick(){
    this.frmRegister.patchValue({
      Age:34,
      frmVendor:{
        vendorName:"ABC info tech"
      }
    })
  }

  public SubmitClick(data:any){
    alert(JSON.stringify(data));
  }
}
