import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: any;
  constructor(private httpClient: HttpClient) { 
    this.user=null;
  }


  login(user): void {
    this.httpClient.post("http://localhost:3500/api/login/", user).subscribe(
      (res) => {
        localStorage.setItem("user", JSON.stringify(res));
        this.user=res;
      }, err => {
        alert("eror to do login");
      }
    )
  }
  register(user): Observable<any> {
    return this.httpClient.post("http://localhost:3500/api/register/", user);
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
  }
}
