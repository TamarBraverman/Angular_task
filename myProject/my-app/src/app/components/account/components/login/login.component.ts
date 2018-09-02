import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import{UsersService}from'../../../../shared/services/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  //----------------PROPERTIRS-------------------
  formGroup: FormGroup;
  user: any;
  obj: typeof Object = Object;

  //----------------CONSTRUCTOR------------------
  constructor(private usersService:UsersService) {
    let formGroupConfig = {
      userName: new FormControl("Tamar", this.createValidatorArr("name", 3, 15,/^[a-zA-Z]*$/)),
      Password: new FormControl("123456", this.createValidatorArr("password", 5, 10,/^[0-9a-zA-Z]*$/))
    };

    this.formGroup = new FormGroup(formGroupConfig);
  }

  //----------------METHODS-------------------
  get f() { return this.formGroup.controls; }

  submitLogin() {
    this.user=JSON.parse(JSON.stringify(this.formGroup.value));
    this.usersService.login(this.user).subscribe(res=>{alert("your details enter");}, req=>{alert("there is a mistake")});
    alert(this.formGroup.status)
  }




  createValidatorArr(cntName: string, min: number, max: number,reg:RegExp): Array<ValidatorFn> {
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null,
      f => f.value && !<String>f.value.match(reg)? { "val": `${cntName} is has to be with english letters` } : null
    ];
  }

}
