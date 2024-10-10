import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time-distinct-until-change',
  templateUrl: './debounce-time-distinct-until-change.component.html',
  styleUrl: './debounce-time-distinct-until-change.component.css'
})
export class DebounceTimeDistinctUntilChangeComponent {
  @ViewChild('mySearch') mySearch!:ElementRef
  @ViewChild('myDistinctSearch') myDistinctSearch!:ElementRef
  ngAfterViewInit(){
   //01 DEBOUNCE_TIME --/////////////////////////////////
   const search = fromEvent<any>(this.mySearch.nativeElement ,'keyup')
   .pipe(
    map(event => event.target.value),
    debounceTime(2000)
    )
   search.subscribe((res)=>{
    console.log(res,"RESPONSE_DEBOUNCE_TIME")
   })

   //02 DISTINCT_UNTIL_CHANGED --/////////////////////////////////
   const searchDistinctUntilChanged = 
   fromEvent<any>(this.myDistinctSearch.nativeElement ,'keyup')
   .pipe(
    map(event => event.target.value),
    debounceTime(2000),
    distinctUntilChanged()
    )
    searchDistinctUntilChanged.subscribe((res)=>{
    console.log(res,"RESPONSE_DISTINCT_UNTIL_CHANGED")
   })

  }
}
