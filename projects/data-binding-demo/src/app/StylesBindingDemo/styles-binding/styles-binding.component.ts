import { Component } from '@angular/core';

@Component({
  selector: 'app-styles-binding',
  templateUrl: './styles-binding.component.html',
  styleUrls: ['./styles-binding.component.css']
})
export class StylesBindingComponent {

  public bgStyle:string='red';
  public textStyle:string='white';
  public padding:string='10';
  public fontSize:string='10';

  public styleObj:{'background-color':string, 'color':string, 'padding':string, 'font-size':string}={
    "background-color":this.bgStyle,
    "color": this.textStyle,
    'padding':this.padding+"px",
     "font-size":this.fontSize+"px"
  };

  public ApplyStyle(){
    this.styleObj={
      "background-color":this.bgStyle,
    "color": this.textStyle,
    'padding':this.padding+"px",
     "font-size":this.fontSize+"px"
  };
  }

  public PaddingChange(){
    this.styleObj =  {
      "background-color":this.bgStyle,
    "color": this.textStyle,
    'padding':this.padding+"px",
     "font-size":this.fontSize+"px"
    };
  }


  public FontChange(){
    this.styleObj =  {
      "background-color":this.bgStyle,
      "color": this.textStyle,
      'padding':this.padding+"px",
       "font-size":this.fontSize+"px"
    };
  }

}
