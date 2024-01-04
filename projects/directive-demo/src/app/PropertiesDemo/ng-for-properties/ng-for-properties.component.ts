import { Component } from '@angular/core';
import { ProductDetails } from 'projects/data-binding-demo/src/app/Contract/product.contract';

@Component({
  selector: 'app-ng-for-properties',
  templateUrl: './ng-for-properties.component.html',
  styleUrls: ['./ng-for-properties.component.css']
})
export class NgForPropertiesComponent {
  public products: ProductDetails[]=[];
  constructor(){}
  ngOnInit(){
    fetch('https://fakestoreapi.com/products')
    .then(data=>data.json())
    .then(data=>{
      this.products = data;
    });
  }


}
