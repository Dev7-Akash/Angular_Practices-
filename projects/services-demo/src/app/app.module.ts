import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from '../login/login.module';
import { ProductsModule } from '../products/products.module';
import { LoginComponent } from '../login/components/login/login.component';
import { ProductComponent } from '../products/components/product/product.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
