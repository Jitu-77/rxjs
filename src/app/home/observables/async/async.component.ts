import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrl: './async.component.css'
})
export class AsyncComponent {
  constructor(private utilityService :UtilityService){}
  ngOnInit(){
    this.utilityService.asyncSubjectTest.subscribe((res)=>console.log(res+"subscribe async subject test"))
  }
}
