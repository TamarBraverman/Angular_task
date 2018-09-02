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

  constructor(usersService:UsersService) {
    this.user = usersService.user;
  }

  ngOnInit() {

  }


}
