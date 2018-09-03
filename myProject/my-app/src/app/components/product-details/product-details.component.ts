
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { UsersService } from '../../shared/services/users.service';
import { BooksService } from '../../shared/services/books.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  book: any;
  user = localStorage.getItem('user');
  constructor(private activeRoute: ActivatedRoute, private router: Router, private booksService: BooksService) {
    alert(this.user);
  }

  ngOnInit() {
    this.activeRoute.params.forEach(v => {
      this.book = v;
    });
  }
  getListCart() {
    return this.booksService.getListCart();

  }
  AddToCart() {
  
    this.booksService.AddToCart(this.book);
  }
  backToProduct() {
    this.router.navigate(["/products"]);
  }
}
