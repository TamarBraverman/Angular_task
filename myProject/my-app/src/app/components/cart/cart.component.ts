import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  listProducts:any;
  constructor() {
    this.listProducts=JSON.parse(localStorage.getItem('productList'));
   }

  ngOnInit() {
  }





}
