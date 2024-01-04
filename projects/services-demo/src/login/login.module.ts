import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { CaptchaService } from './services/captcha.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [
    CaptchaService
  ]
})
export class LoginModule { }
