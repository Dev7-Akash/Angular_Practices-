import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './Components/template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormValidationsComponent } from './Components/template-form-validations/template-form-validations.component';
import { FormBuilderComponent } from './Components/form-builder/form-builder.component';
import { FormBuilderValidationsComponent } from './Components/form-builder-validations/form-builder-validations.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    TemplateFormValidationsComponent,
    FormBuilderComponent,
    FormBuilderValidationsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [FormBuilderValidationsComponent]
})
export class AppModule { }
