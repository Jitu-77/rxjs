import { Component } from '@angular/core';
import { from, interval, map, Observable, Subscription, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.css'
})
export class TapComponent {
ngOnInit(){
  let arr = [
    { name: 'asd', age: '12' ,job:{skill:"js",type:"angular"}},
    { name: 'qwe', age: '13' ,job:{skill:"java",type:"Spring Boot"}},
    { name: 'qwe', age: '13' ,job:{skill:"java",type:"Spring Boot"}},
    { name: 'qwe', age: '13' ,job:{skill:"java",type:"Spring Boot"}},
    { name: 'qwe', age: '13' ,job:{skill:"java",type:"Spring Boot"}},
    { name: 'qwe', age: '13' ,job:{skill:"java",type:"Spring Boot"}},
    { name: 'zxc', age: '14' ,job:{skill:"C#",type:".Net"}},
    { name: 'zxc', age: '14' ,job:{skill:"C#",type:".Net"}},
    { name: 'zxc', age: '14' ,job:{skill:"C#",type:".Net"}},
    { name: 'zxc', age: '14' ,job:{skill:"C#",type:".Net"}},
  ]
  const fromObs1 = from([
    { name: 'asd', age: '12' ,job:{skill:"js",type:"angular"}},
    { name: 'qwe', age: '13' ,job:{skill:"java",type:"Spring Boot"}},
    { name: 'zxc', age: '14' ,job:{skill:"C#",type:".Net"}},
  ]);
  fromObs1.pipe(tap((data)=> console.log(data))).subscribe((res)=>{
  })

  const fromObs2 = interval(1000)
  const $formObs2:Subscription = fromObs2.pipe(
    tap((res)=>{
      console.log("TAP",res)
      if(res>=4){
        $formObs2.unsubscribe()
      }
    }),
    ).subscribe((res)=>{
      console.log("SUBSCRIBE",res)
  })
}
}
