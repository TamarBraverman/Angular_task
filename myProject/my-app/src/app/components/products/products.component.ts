import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // list:any=[];
  listFilter: any = [];
  text: string
  constructor(private booksService: BooksService) {
    this.booksService.getList().subscribe((result: any) => {
      this.listFilter = result['items'];
      console.log(this.listFilter);
    });

  }

  ngOnInit() {



  }
  submit(event) {
    this.booksService.getListfilter(event).subscribe(data => {
      this.listFilter = data['items'];
    });



  }
}
