import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {
  count:number = 0
  constructor(private utilityService :UtilityService){}
  subjectEmit(e:any){
    this.count++
    console.log(e)
    this.utilityService.subjectTest.next("EMIT VALUE IN HEADER CLICK TEST")
    this.utilityService.behaviorSubjectTest.next('')
    this.utilityService.replaySubjectTest.next('take'+this.count)
    this.utilityService.replaySubjectTest.next('take 1')
    this.utilityService.replaySubjectTest.next('take 3')
    this.utilityService.replaySubjectTest.next('take 4')
    
  }
}
