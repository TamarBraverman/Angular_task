import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../shared/myservice.service';

@Component({
  selector: 'app-package-input-component',
  templateUrl: './package-input-component.component.html',
  styleUrls: ['./package-input-component.component.css']
})
export class PackageInputComponentComponent implements OnInit {
  subjectMsg: string[] = [];
  index = 0;
  list: any;
  constructor(private Myservice: MyserviceService) {
  }

  keyup(event) {
    this.list = this.Myservice.listPackage(event.target.value).subscribe(result => this.Myservice.subject.next(result));


  }



  ngOnInit() {

  }

}



