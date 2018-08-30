import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../shared/myservice.service';

@Component({
  selector: 'app-package-list-component',
  templateUrl: './package-list-component.component.html',
  styleUrls: ['./package-list-component.component.css']
})
export class PackageListComponentComponent implements OnInit {
  obj: object[] = [];
  subjectMsg: any[] = [];
  subjectMsg2: string[] = [];
  i: any = 0;
  constructor(private Myservice: MyserviceService) {
    this.Myservice.subject.subscribe(
      {
        next: (v: any) => this.subjectMsg = v
      }
    );
    this.Myservice.subject2.subscribe(
      {
        next: (v: any) => {
      
          for (let i=0;i<this.subjectMsg.length;i++) {
            this.Myservice.listdatefrompackage(v, this.subjectMsg[i]).subscribe(result => this.subjectMsg[i].package.download=result.downloads);
          }
        }
      }
    );
  }

  ngOnInit() {

  }



}