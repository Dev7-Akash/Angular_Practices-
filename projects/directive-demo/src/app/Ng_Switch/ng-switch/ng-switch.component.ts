import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
  public ViewName:string = "details";


  public ViewClick(viewName:string){
    this.ViewName = viewName;
  }

}
