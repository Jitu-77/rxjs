import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, delay, distinctUntilChanged, filter, from, map, mergeMap, of, pluck, switchAll, switchMap } from 'rxjs';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css'
})
export class SwitchMapComponent {
  constructor(private utilityService :UtilityService){}
  @ViewChild('mySearch') mySearch!:NgForm
  ngOnInit(){
    //using double subscription
    // const videoMergeStream1 = from(['a','b','c']).pipe(
    //   map(res=> this.getData(res)),
    // )
    // videoMergeStream1.subscribe((res)=>{ 
    //   console.log(res,"OBSERVABLE WITH  MAP")
    //   res.subscribe((response :any)=>{
    //     console.log(response,"OBSERVABLE WITH MAP response")
    //   })
    // })

    // using switch all
    // const videoMergeStream2 = from(['a','b','c']).pipe(
    //   map(res=> this.getData(res)),
    //   switchAll()
    // )
    // videoMergeStream2.subscribe((res)=>{ 
    //   console.log(res,"OBSERVABLE WITH SWITCH ALL")
    // })

    // using switch Map
    const videoMergeStream3 = from(['a','b','c']).pipe(
      map(res=> this.getData(res)),
      switchAll()
    )
    videoMergeStream3.subscribe((res)=>{ 
      console.log(res,"OBSERVABLE WITH SWITCH MAP")
    })
  }
  // ngAfterViewInit(){
  //   console.log("FORM VALUE CHANGES EG")
  //   const formValue = this.mySearch.valueChanges
  //   formValue?.
  //   pipe(
  //     // map(res=>res['Search'])
  //     filter(()=> !!this.mySearch?.valid),
  //     //!! is a common way to cast a value to a boolean in JavaScript/TypeScript. 
  //     //It will convert any value to true or false. 
  //     //If this.mySearch?.valid is null or undefined, 
  //     //!! will return false. If this.mySearch?.valid is true or false, 
  //     //it will return the corresponding boolean value.
  //     pluck('Search'),
  //     debounceTime(500),
  //     distinctUntilChanged(),
  //     // concatMap((data)=> this.utilityService.getData('rxjs'))
  //     switchMap(data=> this.utilityService.getData(data))
  //   ).subscribe((res)=>{
  //     console.log(res,"FORM VALUE CHANGES SUBSCRIPTION")
  //   })
  // }
  ngAfterViewInit() {
    const formValue = this.mySearch.valueChanges;
  
    formValue?.pipe(
      filter(() => !!this.mySearch?.valid),
      pluck('Search'),
      debounceTime(500),
      // distinctUntilChanged(),
      switchMap(data => this.utilityService.getData(data))  // switchMap cancels previous requests
    ).subscribe((res) => {
      console.log(res, "FORM VALUE CHANGES SUBSCRIPTION");
    });
  }
  
  getData(data: any): any {
    return of("switchMap " + data).pipe(delay(2000))
  }


}



