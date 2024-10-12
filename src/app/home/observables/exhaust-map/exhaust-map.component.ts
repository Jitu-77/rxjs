import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { HttpClient } from '@angular/common/http';
import { exhaustMap, fromEvent } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.css'
})
export class ExhaustMapComponent {
  @ViewChild('callApi') callApi!:ElementRef
  constructor(private utilityService :UtilityService,private http:HttpClient){}
  num = 0
  ngOnInit(){
    this.num = 0
  }

  ngAfterViewInit(){
    fromEvent(this.callApi.nativeElement,'click')
    .pipe(
    exhaustMap(()=> this.utilityService.getProducts())
  )
    .subscribe((res)=>{
     console.log(res)
    })
  }
  callPostApi(){
    return
    //normal call always call ad oly solution is cursor pointer as none
    let putUrl = 'https://global-1bb0f.firebaseio.com/exhaustMap.json'
    console.log(this.num)
    this.num++
    // this.http.put(putUrl,{data:this.num}).subscribe((res)=>console.log(res))
    this.utilityService.getProducts().subscribe((res)=>console.log(res))
  }
}
