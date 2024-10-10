import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {
  constructor(private utilityService :UtilityService){}
  ngOnInit(){
    this.utilityService.subjectTest.subscribe((res)=>console.log(res+"subscribe subject test"))
    this.utilityService.behaviorSubjectTest.subscribe((res)=>console.log(res+"subscribe behavior subject test"))
  }
}
