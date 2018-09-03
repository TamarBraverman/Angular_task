import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Subject } from "rxjs";
import { User } from '../models/user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: User;
  subject = new Subject();
  constructor(private router:Router,private httpClient: HttpClient) {
    this.user = null;
  }


  login(user) {
    this.httpClient.post("http://localhost:3500/api/login/", JSON.parse(JSON.stringify(user))).subscribe(res => {
        user = JSON.stringify(res);
        localStorage.setItem('user', user);
        this.subject.next(this.checkUserLogin());
        this.router.navigate(["/home"]);
    }, err => { 
      this.router.navigate(["/account/register"]);

    });

  }
  register(user) {
    return this.httpClient.post("http://localhost:3500/api/register/", user).subscribe(res=>{alert("your details enter");
    user = JSON.stringify(res);
    localStorage.setItem('user', user);
    this.subject.next(this.checkUserLogin());
        this.router.navigate(["/home"]);
  }, req=>{alert("there is a mistake")});;
  }
  logout() {

    localStorage.clear();
    this.subject.next(this.checkUserLogin());
  }
  checkUserLogin():User {
    return JSON.parse(localStorage.getItem('user'))
  }
}
