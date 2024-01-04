import { Component } from '@angular/core';
import { CaptchaService } from '../../services/captcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    CaptchaService
  ]
})
export class LoginComponent {
  public code:String = "";
  constructor(private _serv:CaptchaService){}  
  ngOnInit(){
    this.code =  this._serv.GenerateCode();
  }
  public NewCode():void{
    this.code =  this._serv.GenerateCode();
  }
}
