import { ProductDetails } from './../../Contract/product.contract';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart-app',
  templateUrl: './flipkart-app.component.html',
  styleUrls: ['./flipkart-app.component.css']
})
export class FlipkartAppComponent {
    

  public categories:string[] = [];
  public products:ProductDetails[] = [] ;
  public cartItems:ProductDetails[] = [];
  public cartItemsCount:number = 0;
  public isCartVisible:boolean = false;
  public proQuantity:number=0;


 
  ngOnInit(){
    this.Loadcategories();
    this.GetProducts('https://fakestoreapi.com/products');
  }
  public Loadcategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then(data=>data.json())
    .then(data=>{
      this.categories = data;
    })
  }


 public CategoryChanged(categoryName:string){
    if(categoryName == 'all'){
      this.GetProducts('https://fakestoreapi.com/products')
    }
    else{
      this.GetProducts('https://fakestoreapi.com/products/category/'+categoryName);
    }  
 }
 public ToggleCartItems(){
  this.isCartVisible = this.isCartVisible == true ? false : true;
 }
 RemoveCartItem(index:number){
    var flag = confirm('Do you want to remove from cart?');
    if(flag == true){
      this.cartItems.splice(index,1);
      this.cartItemsCount = this.cartItems.length;
    }
 }
 public GetProducts(url:string){
  fetch(url)
  .then(data=>data.json())
  .then(data=>{
    this.products = data;
  })
 }


 public AddToCart(item:number){
  fetch('https://fakestoreapi.com/products/'+item)
  .then(data=>data.json())
  .then(data=>{
    this.cartItems.push(data);
    this.cartItemsCount =  this.cartItems.length;
    alert(data.title+"Added to Cart");
  })
 }

 public QtyIncrement(){
  this.proQuantity=this.proQuantity+1;
 }

 public QtyDecrement(){
  this.proQuantity=this.proQuantity-1;
 }

 public totalAmt(){
  
 }

}
