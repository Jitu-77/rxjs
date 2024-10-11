import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  url = 'https://my-json-server.typicode.com/Uxtrendz/apis/videoList'
  subjectTest = new Subject<any>()
  behaviorSubjectTest = new BehaviorSubject<any>('Jitu')
  replaySubjectTest = new ReplaySubject(3, 2000) // number , delay
  asyncSubjectTest = new AsyncSubject()
  constructor(private http:HttpClient) { }
  getData(data:any) :Observable<any>{
    return this.http.get(this.url+'?q='+data)
  }
}
