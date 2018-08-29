import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { validId, validage, validcountry } from '../shared/validator/url.validator';
import { MyServiceService } from '../shared/server/my-service.service';
import { jsonpCallbackContext } from '../../../node_modules/@angular/common/http/src/module';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  myForm: FormGroup;
  user: any;
  constructor(private fb: FormBuilder, private service: MyServiceService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      Id: ['', validId],
      age: ['', validage],
      name: [''],
      isMale: [''],
      country: ['', validcountry]
    });
  }
  submit() {
    if (this.myForm.invalid) {
      alert("sorry you didn't enter all the details");
    }
    else {

      this.user=JSON.parse(JSON.stringify(this.myForm.value));
      this.service.sentToServer(this.user).subscribe(res=>{alert("your details enter");}, req=>{alert("there is a mistake")});
    }

  }
}



