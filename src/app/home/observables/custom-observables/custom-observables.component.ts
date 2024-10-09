import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observables',
  templateUrl: './custom-observables.component.html',
  styleUrl: './custom-observables.component.css'
})
export class CustomObservablesComponent {
  ngOnInit(){
    //1
    const customObs =  new Observable<string>(observer=>{
      setTimeout(()=>{
        observer.next("first next")
      },1000)
      setTimeout(()=>{
        observer.next("second next")
      },2000)
      setTimeout(()=>{
        observer.next("third next")
        observer.complete()
      },2000)
      setTimeout(()=>{
        observer.next("fourth next")
        // observer.error("ERROR THIS LOG")
      },2000)
      observer.next("fifth next")
      observer.next("sixth next")
    })
    customObs.subscribe((res)=>{
      console.log("customObs",res)
    })

    //2
    const customObs2 = new Observable<any>(observer=>{
      let count =1 
      setInterval (()=>{
        observer.next(count)
        count++
        if(count>10){
          observer.complete()
        }
      },1000)
    })
    customObs2.subscribe((res)=>{
      console.log(res,"COUNT VAL")
    })
  }
}
