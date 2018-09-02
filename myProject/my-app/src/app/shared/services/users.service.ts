import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  login(user)
  {
   return this.http.get("http://localhost:3500/api/register/",user);
  }
  register(user):Observable<any>
  {
    alert("hi");
    return this.http.post("http://localhost:3500/api/register/",user);
  }
}
