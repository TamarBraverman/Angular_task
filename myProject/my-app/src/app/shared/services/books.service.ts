import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }
  getListfilter(type) {
    return this.httpClient.get(`https://www.googleapis.com/books/v1/volumes?q=${type}&maxResults=40&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`);
  }
  getList() {
    return this.httpClient.get<any>(`https://www.googleapis.com/books/v1/volumes?q=a&maxResults=40&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`);
  }
  getnewlist() {

    return this.httpClient.get("http://localhost:3500/api/getList/")

  }
  getListCart() {
    let list = localStorage.getItem("productList");  //if "peopleList" does not exist in the local storage we will get null
    return (list) ? JSON.parse(list) : [];
  }
  AddToCart(book) {
    let currentList = this.getListCart();
    // book.id = currentList.length + 1;
    currentList.push(book);
    localStorage.setItem("productList", JSON.stringify(currentList));

  }
  removeFromListCart(book) {
    let currentList = this.getListCart();
    // currentList.splice(book['id'],1);
    localStorage.setItem("productList", JSON.stringify(currentList));

  }
}
