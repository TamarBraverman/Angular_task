import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../shared/myservice.service';
@Component({
  selector: 'app-time-range-input-component',
  templateUrl: './time-range-input-component.component.html',
  styleUrls: ['./time-range-input-component.component.css']
})
export class TimeRangeInputComponentComponent implements OnInit {

  subjectMsg: any[] = [];
  index = 0;
  startdate: Date;
  enddate: Date;
  dates: any[] = [];
  list: any;
  constructor(private Myservice: MyserviceService) {


    this.dates = ["2016-08-08", "2018-02-08"];
  }

  onblur(event) {

    if (event.target.id == "start")
      this.dates[0] = event.target.value;
    if (event.target.id == "end")
      this.dates[1] = event.target.value;



  }
  save() {

      this.Myservice.subject2.next(this.dates);
  }

  ngOnInit() {

  }
}