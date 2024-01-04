import { Component } from '@angular/core';
import {ProductDetails} from '../Contract/product.contract';


@Component({
  selector: 'app-product-details-api',
  templateUrl: './product-details-api.component.html',
  styleUrls: ['./product-details-api.component.css']
})
export class ProductDetailsAPIComponent {
  public product:ProductDetails= {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
        rate:0,
        count: 0
  }

};
count:number=1;

GetProducts(id:number){
  fetch('https://fakestoreapi.com/products/'+id)
  .then((response)=> response.json())
 .then((response)=>{
      this.product =response;
});
}

ngOnInit(){
  this.GetProducts(this.count);
}

PreviousClick(){
  this.count=this.count-1;
  this.GetProducts(this.count);
}

NextClick(){
  this.count=this.count+1;
  this.GetProducts(this.count);
}
};
  
