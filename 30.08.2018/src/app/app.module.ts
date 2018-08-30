import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PackageInputComponentComponent } from './components/package-input-component/package-input-component.component';
import { TimeRangeInputComponentComponent } from './components/time-range-input-component/time-range-input-component.component';
import { PackageListComponentComponent } from './components/package-list-component/package-list-component.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PackageInputComponentComponent,
    TimeRangeInputComponentComponent,
    PackageListComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
