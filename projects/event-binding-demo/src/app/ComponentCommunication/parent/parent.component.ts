import { Component } from '@angular/core';
import { ProductDetails } from 'projects/data-binding-demo/src/app/Contract/product.contract';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public msg:string = "Message from parent";
  public courses:string[] = ["C#.Net","Java","Angular","React JS"];
  public products:ProductDetails[]=[];
  public msgFromChild:any="";
  public courseFromChilddata:any=[];


  ngOnInit(){
    fetch('https://fakestoreapi.com/products')
    .then(data=>data.json())
    .then(data=>{
      this.products = data;
    })
  }
  public MessageFromChild(e:any){
    this.msgFromChild = e;
  }
  public CourseInfoFromChild(e:any){
    this.courseFromChilddata = e;
  }

}
