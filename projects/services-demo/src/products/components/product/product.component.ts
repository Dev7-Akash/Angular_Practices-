import { Component } from '@angular/core';
import { ProductDetails } from 'projects/data-binding-demo/src/app/Contract/product.contract';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [
    ProductComponent
  ]
})
export class ProductComponent {
  public products:ProductDetails[] = [];

  constructor(private _serv:ProductService){
  }

  ngOnInit(){
    this._serv.GetProducts().subscribe(data=>{
      this.products = data
    });
  }
}
