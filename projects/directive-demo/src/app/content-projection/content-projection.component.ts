import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent {
  constructor(){


  }
  public thenBlock:TemplateRef<any>|null = null;
  @ViewChild('View1',{static:true}) public View1:TemplateRef<any>|null = null;
  @ViewChild('View2',{static:true}) public View2:TemplateRef<any>|null = null;
  @ViewChild('View3',{static:true}) public View3:TemplateRef<any>|null = null;
  @ViewChild('View4',{static:true}) public View4:TemplateRef<any>|null = null;
  @ViewChild('View5',{static:true}) public View5:TemplateRef<any>|null = null;
  @ViewChild('View6',{static:true}) public View6:TemplateRef<any>|null = null;
  @ViewChild('View7',{static:true}) public View7:TemplateRef<any>|null = null;


  ngOnInit(){
    this.thenBlock = this.View1;
  }


  public ChangeView(viewName:string){
    switch(viewName){
      case 'View1':
        this.thenBlock = this.View1;
        break;
      case 'View2':
        this.thenBlock = this.View2;
        break;
      case 'View3':
        this.thenBlock = this.View3;
        break;
      case 'View4':
        this.thenBlock = this.View4;
        break;
      case 'View5':
        this.thenBlock = this.View5;
        break;
        case 'View6':
        this.thenBlock = this.View6;
        break;
        case 'View7':
        this.thenBlock = this.View7;
        break;
    }
  }


}


