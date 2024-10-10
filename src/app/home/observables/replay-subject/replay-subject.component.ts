import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css'
})
export class ReplaySubjectComponent {
  constructor(private utilityService :UtilityService){}
  ngOnInit(){
    this.utilityService.replaySubjectTest.subscribe((res)=>console.log(res+"subscribe replay subject test"))
  }
}
