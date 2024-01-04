import { Component } from '@angular/core';

@Component({
  selector: 'app-predefined-pipes',
  templateUrl: './predefined-pipes.component.html',
  styleUrls: ['./predefined-pipes.component.css']
})
export class PredefinedPipesComponent {
 name:string="weLcoME tO NaResH iT";
 public rate:number=0.225;
 public product:{Name:string,price:number}={
  Name:'Iphone 14',
  price:74000
 };

 public categories:string[]=[
  "Electronics",
  "Clothing",
  "Shoes",
 ];

 public today:Date=new Date();
 public cost:number=55600;
}
