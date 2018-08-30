import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }
  configUrl = 'https://restcountries.eu/rest/v2/all';
  getAllCountries() {
    return this.http.get(this.configUrl);
  }




}
