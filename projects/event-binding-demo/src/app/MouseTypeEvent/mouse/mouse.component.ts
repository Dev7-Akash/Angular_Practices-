import { Component } from '@angular/core';
import { ProductDetails } from 'projects/data-binding-demo/src/app/Contract/product.contract';


@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent {
  public styleObj :{position:string,left:string,top:string}={
    left:'0px',
    top:'0px',
    position:''
  }
  public img_src:string='';
  public products:ProductDetails[]=[];
  public SetImage(ImageName:string){
    switch(ImageName){
      case 'Led':
        this.img_src = 'assets/LED.jpg';
        break;
      case 'Iphone':
        this.img_src = 'assets/Iphone13.jpg';
        break;
      case 'Watch':
        this.img_src = 'assets/Image1.jpg';
        break;
    }
  }
  public MouseMove(e:any){
    this.styleObj = {
      left:e.clientX+'px',
      top:e.clientY+'px',
      position:'absolute'
    }
  }

  
}


