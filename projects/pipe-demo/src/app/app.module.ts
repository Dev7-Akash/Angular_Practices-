import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PredefinedPipesComponent } from './Component/predefined-pipes/predefined-pipes.component';
import { AdvancedPipesComponent } from './Component/advanced-pipes/advanced-pipes.component';
import { CustomPipesComponent } from './Component/custom-pipes/custom-pipes.component';
import { GenderPipe } from './Pipes/gender.pipe';
import { ReversePipe } from './Pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PredefinedPipesComponent,
    AdvancedPipesComponent,
    CustomPipesComponent,
    GenderPipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CustomPipesComponent]
})
export class AppModule { }
