import { Component } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
    prodId:number=1432;
    prodName:string="LED_TV";
    prodImg:string="./assets/LED.jpg";
    prodAvl:boolean=true;
    prodPrice:number=55000;
}
