import { Component } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrl: './interval-timer.component.css'
})
export class IntervalTimerComponent {
  intervalSubscription! : Subscription
  timerSubscription! : Subscription
  ngAfterViewInit(){
    const $interval = interval(1000)
    const $timer = timer(7000,1000) // timer(seconds to delay,interval)
    this.intervalSubscription = $interval.subscribe((res)=> {
      console.log("interval",res)
      if(res>5){
        this.intervalSubscription.unsubscribe()
      }
    })
    this.timerSubscription = $timer.subscribe((res)=> {
      console.log("timer",res)
      if(res>5){
        this.timerSubscription.unsubscribe()
      }
    })
  }
}
