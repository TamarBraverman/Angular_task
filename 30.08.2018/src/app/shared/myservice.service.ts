import { Injectable } from "@angular/core";
import { Observable, of, from, Subject, observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  subject = new Subject();
  subject2=new Subject();
  list: string[] = [];

  private Myservice: MyserviceService;
  constructor(private http: HttpClient) {
  }

  listPackage(event):Observable<object> {
    return this.http.get(`https://api.npms.io/v2/search/suggestions?q=${event}&size=40`);
  }

  listdatefrompackage(dates:any,packages:any):Observable<any> {
    
    return this.http.get(`https://api.npmjs.org/downloads/point/${dates[0]}:${dates[1]}/${packages.package.name}`);
  }

}


// constructor(private mathService: MathService) {
//   this.mathService.subject.subscribe(
//     {
//       next: (v:string) => this.subjectMsg.push(v)
//     }
//   );
//  }

//  onClick() {
//   this.mathService.subject
//   .next(`Child2 says: ${this.index++}`);
// }