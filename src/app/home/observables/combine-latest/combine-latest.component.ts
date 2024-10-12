import { Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.css'
})
export class CombineLatestComponent {
    name=['a','b','c','d','e','f']
    count=['1','2','3','4','5','6','7','8','9']
    @ViewChild('drp1') drp1!:ElementRef
    @ViewChild('drp2') drp2!:ElementRef

    ngAfterViewInit(){
      const drp1 = fromEvent(this.drp1.nativeElement,'change')
      .pipe(
        map((event:any)=>event?.target?.value) 
      )

      const drp2 = fromEvent(this.drp2.nativeElement,'change')
      .pipe(map((event:any)=>event?.target?.value ))
      


      combineLatest(drp1,drp2).
      subscribe(([drp1Data,drp2Data])=> console.log(drp1Data,drp2Data,"COMBINE LATEST , DRP1,DRP2"))

      drp1.pipe(withLatestFrom(drp2)).
      subscribe(([drp1Data,drp2Data])=> console.log(drp1Data,drp2Data,"WITH LATEST FORM, DRP1,DRP2"))
    }
}
