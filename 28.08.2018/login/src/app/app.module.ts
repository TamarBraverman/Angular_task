import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyFormComponent } from './my-form/my-form.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import{MyServiceService}from './shared/server/my-service.service';
import {  HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
