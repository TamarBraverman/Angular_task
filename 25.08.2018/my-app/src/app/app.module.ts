import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { RouterModule, Routes } from '@angular/router';
import{CountryService}from './services/country.service';
import { HttpClientModule } from '@angular/common/http';
export const routes: Routes= [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'countries',
    component: CountriesComponent
  },
   {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
   {
     path: '**',
     redirectTo: '/home',
      pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
