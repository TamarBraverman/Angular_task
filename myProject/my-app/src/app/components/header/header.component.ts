import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import {UsersService}from '../../shared/services/users.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private usersService:UsersService) {
    this.user = this.usersService.checkUserLogin();
    this.usersService.subject.subscribe(
      {
        next: (v: any) => {
          this.user = v;
        }
      })
  }

  ngOnInit() {

  }


}
