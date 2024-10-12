import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { HttpClient } from '@angular/common/http';
import { exhaustMap, filter, fromEvent, map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrl: './share-replay.component.css'
})
export class ShareReplayComponent {
  constructor(private utilityService :UtilityService,private http:HttpClient){}
  // products :any =undefined // normal
  products !:Observable<any>
  mobileData :any =undefined
  laptopData :any =undefined
  ngOnInit(){
  }

  ngAfterViewInit(){
  }
  callGetApi(){
    //
    // this.utilityService.getProducts().subscribe((res)=>{
    //   this.products = res
    // })
    // 

    // using this 2 apis a re called as 2 times calling
    // this.products =   this.utilityService.getProducts()

    //hence
    this.products =   this.utilityService.getProducts().pipe(
      shareReplay()
    )

    this.mobileData = this.products.pipe(
      map(res =>res.filter((mobileData:any)=> {return mobileData.type == "mobile"})
    )).subscribe((res)=>console.log(res))
    this.laptopData = this.products.pipe(
      map(res =>res.filter((mobileData:any)=> {return mobileData.type == "pc"})
    )).subscribe((res)=>console.log(res))
  }
}
