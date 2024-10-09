import { Component } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.css'
})
export class ToArrayComponent {
  intervalSubscription!:Subscription
  ngOnInit(){
    //convert a stream to an Array
    const $interval = interval(1000);
    this.intervalSubscription = $interval
      .pipe(take(6), toArray())
      .subscribe((res) => {
        console.log('toArray Subscribe', res);
      });

    // FROM
    const fromObs1 = from([
      { name: 'asd', age: '12' },
      { name: 'qwe', age: '13' },
      { name: 'zxc', age: '14' },
    ]);
    fromObs1.pipe(toArray()).subscribe((res) => {
      console.log('toArray+from', res);
    });

    //OF -----
    const ofObs1 = of("asd","qwe","vbn")
    ofObs1.pipe(toArray()).subscribe((res)=>{
      console.log("toArray+of",res)
    })
  }
  
}
