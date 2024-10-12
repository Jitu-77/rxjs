import { Component, ElementRef, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, map, take, withLatestFrom, zip } from 'rxjs';

@Component({
  selector: 'app-zip-fork-join',
  templateUrl: './zip-fork-join.component.html',
  styleUrl: './zip-fork-join.component.css'
})
export class ZipForkJoinComponent {
  name=['a','b','c','d','e','f']
  count=['1','2','3','4','5','6','7','8','9']
  @ViewChild('drp1') drp1!:ElementRef
  @ViewChild('drp2') drp2!:ElementRef

  ngAfterViewInit(){
    const drp1 = fromEvent(this.drp1.nativeElement,'change')
    .pipe(
      map((event:any)=>event?.target?.value) ,
      take(3) // for fork join
    )

    const drp2 = fromEvent(this.drp2.nativeElement,'change')
    .pipe(
      map((event:any)=>event?.target?.value ) 
      ,take(3) // for fork join
    )
    


    zip(drp1,drp2).
    subscribe(([drp1Data,drp2Data])=> console.log(drp1Data,drp2Data,"ZIP  , DRP1,DRP2"))

    forkJoin(drp1,drp2).
    subscribe(([drp1Data,drp2Data])=> console.log(drp1Data,drp2Data,"FORK JOIN , DRP1,DRP2"))
  }
}
