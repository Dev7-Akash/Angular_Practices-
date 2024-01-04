import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { NgSwitchComponent } from './Ng_Switch/ng-switch/ng-switch.component';
import { FormsModule } from '@angular/forms';
import { NgForDemo1Component } from './NgForDemos/ng-for-demo1/ng-for-demo1.component';
import { NgForPropertiesComponent } from './PropertiesDemo/ng-for-properties/ng-for-properties.component';
import { TrackByComponent } from './TrackByComponent/track-by/track-by.component';
import { MyCustomDirectiveComponent } from './CustomDirectives/my-custom-directive/my-custom-directive.component';
import { CustomDirectiveComponent } from './CustomDirectives/customDirective';

@NgModule({
  declarations: [
    AppComponent,
    ContentProjectionComponent,
    NgSwitchComponent,
    NgForDemo1Component,
    NgForPropertiesComponent,
    TrackByComponent,
    MyCustomDirectiveComponent,
    CustomDirectiveComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MyCustomDirectiveComponent]
})
export class AppModule { }
