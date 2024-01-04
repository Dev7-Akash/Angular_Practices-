import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDetails } from 'projects/data-binding-demo/src/app/Contract/product.contract';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public messageFromParent:string = "";
  @Input() public coursesFromParent:string[] = [];
  @Input() public productsFromParent:ProductDetails[]=[];


  public courses:string[] = ["C#.Net","VB.Net","Angular","Java"];


  @Output() public ChildClick:EventEmitter<any> = new EventEmitter<any>();
  @Output() public CourseInfo:EventEmitter<any> = new EventEmitter<any>();  


  public PrepareData(){
    this.ChildClick.emit('Hello!... Message from Child');
    this.CourseInfo.emit(this.courses);
  }

}
