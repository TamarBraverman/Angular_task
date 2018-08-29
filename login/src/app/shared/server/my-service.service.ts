import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }
  sentToServer(user)
  {
   return this.http.post("https://tamar-braverman-angular.herokuapp.com/api/person",user);
  }
}

// "http://localhost:3500/api/person",

