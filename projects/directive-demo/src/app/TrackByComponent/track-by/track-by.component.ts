import { Component } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.css']
})
export class TrackByComponent {
  public products:any[]=[
    {Name:'TV',Price:54000.00},
    {Name:'Mobile',Price:43212.50},
    {Name:'Smart watch',Price:4500.00}
  ];
  UpdateClick(){
    this.products = [
      {Name:'TV',Price:54000.00},
      {Name:'Mobile',Price:43212.50},
      {Name:'Tablet',Price:9000.98},
      {Name:'Smart watch',Price:4500.00},      
      {Name:'Shoes',Price:4500.98},
      {Name:'HeadPhones',Price:3500.98}
    ]
  }


  TrackChanges(index:number){
    return index;
  }

}
