import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo1',
  templateUrl: './ng-for-demo1.component.html',
  styleUrls: ['./ng-for-demo1.component.css']
})
export class NgForDemo1Component {
  public employee:{empID:number,empName:string,empSalary:number}[]=[
    {empID:101,empName:'Srikanth',empSalary:12345},
    {empID:101,empName:'Srikanth',empSalary:12345},
    {empID:101,empName:'Srikanth',empSalary:12345},
    {empID:101,empName:'Srikanth',empSalary:12345},
    {empID:101,empName:'Srikanth',empSalary:12345}
  ];


  public category:string = 'Electronics';
  public products:string[] = [];
  public Menu:{category:string,products:string[]}[]=[
    {
      category:'Electronics',
      products:['Oneplus','Iphone','Samsung','Oppo']
    },
    {
      category:'Electricals',
      products:['Fridge','Washing Machine','Smart TV','Cooker']
    },
    {
      category:'Footwear',
      products:['Woodland','Puma','Nike','Bata','Leecooper']
    },
    {
      category:'Tickets',
      products:['Flight','Train','Bus']
    }
  ];
  ngOnInit(){
    this.LoadProducts();
  
  }
 
  

  OnCategoryChange(){
    this.LoadProducts();
  }
  public LoadProducts(){
    for(let item of this.Menu){
      if(item.category == this.category){
        this.products = item.products;
      }
    }
  }

}