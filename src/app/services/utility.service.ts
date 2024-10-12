import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, catchError, Observable, ReplaySubject, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  url = 'https://my-json-server.typicode.com/Uxtrendz/apis/videoList'
  getUrl = 'https://test-products-b05fe.firebaseio.com/products.json'
  putUrl = 'https://global-1bb0f.firebaseio.com/exhaustMap.json'
  subjectTest = new Subject<any>()
  behaviorSubjectTest = new BehaviorSubject<any>('Jitu')
  replaySubjectTest = new ReplaySubject(3, 2000) // number , delay
  asyncSubjectTest = new AsyncSubject()
  constructor(private http:HttpClient) { }
  getData(data:any) :Observable<any>{
    return this.http.get(this.url+'?q='+data)
  }
  getProducts() :Observable<any>{
    return this.http.get(this.getUrl)
  }
  putData(clicks:any) :Observable<any>{
    return this.http.put(this.putUrl,{data:clicks}).pipe(catchError(this.handleError))
  }
  handleError(err:HttpErrorResponse){
    console.log(err,"HANDLE ERROR")
    let errMsg = 'Hello world'
    return throwError(errMsg)
  }
}
