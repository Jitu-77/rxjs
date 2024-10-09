import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css'
})
export class FromEventComponent {
  @ViewChild('add') addBtn!:ElementRef

  ngAfterViewInit(){
    let count =1
    fromEvent(this.addBtn.nativeElement,'click')
    .subscribe((res)=>{
      count++
      console.log('subscribed',count)
    })
  }
}
