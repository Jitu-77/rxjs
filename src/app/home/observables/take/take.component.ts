import { Component } from '@angular/core';
import { from, fromEvent, interval, take, takeLast, takeUntil, timer, toArray } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrl: './take.component.css'
})
export class TakeComponent {
  ngOnInit(){
    //take
    const $takeInterval = interval(1000)
    $takeInterval.pipe(take(5))
    .subscribe((res)=>{
      console.log("take",res)
    })

    //takeLast
    const fromObs2 = from([
      { name: 'asd', age: '12' ,job:{skill:"js",type:"angular"}},
      { name: 'asd', age: '12' ,job:{skill:"js",type:"angular"}},
      { name: 'qwe', age: '13' ,job:{skill:"java",type:"Spring Boot"}},
      { name: 'qwe', age: '13' ,job:{skill:"java",type:"Spring Boot"}},
      { name: 'zxc', age: '14' ,job:{skill:"C#",type:".Net"}},
      { name: 'zxc', age: '14' ,job:{skill:"C#",type:".Net"}},
    ]);
    fromObs2.pipe(takeLast(3),toArray()).subscribe((res) => {
      console.log('fromObs2 By TAKE LAST', res);
    });

    //takeUntil
    const $takeUntilInterval = interval(1000)
    const $takeUntilObservable = timer(6000)
    const $fromEvent = fromEvent(document,'click')
    $takeUntilInterval.pipe(
      // takeUntil($takeUntilObservable),
      takeUntil($fromEvent)
    )
    .subscribe((res)=>{
      console.log("takeUntil",res)
    })
  }

}
