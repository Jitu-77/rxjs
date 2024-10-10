import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrl: './retry.component.css'
})
export class RetryComponent {
  constructor(private httpClient:HttpClient){

  }
  ngOnInit(){
    this.fetchJsonData()
  }
  fetchJsonData(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/postss')
    .pipe(
      // retry(2)
      
      retryWhen(err=> err.pipe(
        delay(3000),
        scan((retryCount)=>{
          if(retryCount>5){
            throw err
          }else{
            retryCount++
            console.log(retryCount)
          }
          return retryCount
        },0)
      ))
    )
    .subscribe(
      (res)=>{
      console.log(res,"fetch res")
      },(error)=>{
      console.log(error,"fetch error")
      }
    )
  }
}
