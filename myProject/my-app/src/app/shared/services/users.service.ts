import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: any;
  constructor(private router:Router,private httpClient: HttpClient) {
    this.user = null;
  }


  login(user) {
    this.httpClient.post("http://localhost:3500/api/login/", JSON.parse(JSON.stringify(user))).subscribe(res => {
        user = JSON.stringify(res);
        localStorage.setItem('user', user);
        alert(localStorage.getItem('user'));
        this.router.navigate(["/home"]);

     
      // localStorage.setItem('currentUser', JSON.stringify(this.user));
    }, err => { 
      this.router.navigate(["/account/register"]);

    });

  }
  register(user) {
    console.log(user);
    return this.httpClient.post("http://localhost:3500/api/register/", user).subscribe(res=>{alert("your details enter");
    user = JSON.stringify(res);
    localStorage.setItem('user', user);
        this.router.navigate(["/home"]);
  }, req=>{alert("there is a mistake")});;
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
  }
}
