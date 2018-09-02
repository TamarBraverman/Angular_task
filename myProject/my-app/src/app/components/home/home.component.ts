import { Component, OnInit } from '@angular/core';
import { bookStore } from '../../shared/models/book-store';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myBookStore: bookStore;
  constructor() {

    this.myBookStore=new bookStore();
    this.myBookStore.city = "Tel-Aviv";
    this.myBookStore.street="Hamasger";
    this.myBookStore.houseNumber=12;


  }

  ngOnInit() {
  }

}
