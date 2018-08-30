import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private countryService: CountryService) { }
  countryList: any;
  countryFilter: any;
  text: string;
  ngOnInit() {

    this.countryList = this.countryService.getAllCountries()
      .subscribe((result: any) => {
        this.countryList = result;
        this.countryFilter = result;
      });

  }
  onKey(event: any) {


    this.text = event.target.value;
    this.countryFilter = this.countryList;
    this.countryFilter = this.countryFilter.filter(p => p.name.includes(this.text) || p.capital.includes(this.text));



  }

}
