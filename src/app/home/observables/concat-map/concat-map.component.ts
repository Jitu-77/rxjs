import { Component } from '@angular/core';
import { concatAll, concatMap, delay, from, interval, map, mergeMap, of, take } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.css'
})
export class ConcatMapComponent {
  ngOnInit(){
    // using double subscription
    // const videoMergeStream = interval(1000).pipe(map(res=> this.getData(res)),take(5))
    // videoMergeStream.subscribe((res)=>{ 
    //   console.log(res,"OBSERVABLE")
    //   res.subscribe((response)=>{
    //     console.log(response,"OBSERVABLE FINAL RESPONSE")
    //   })
    // })

    //Using concat All
    // const videoMergeStream = from(['a','b','c']).pipe(
    //   map(res=> this.getData(res)),
    //   concatAll(),
    //   take(5),
    // )
    // videoMergeStream.subscribe((res)=>{ 
    //   console.log(res,"OBSERVABLE WITH CONCAT ALL")
    // })

    // Concat MAP // takes the delay every time so order is maintained
    const videoMergeStream = from(['a','b','c']).pipe(
      concatMap(res=> this.getData(res)),
      take(5),
    )
    videoMergeStream.subscribe((res)=>{ 
      console.log(res,"OBSERVABLE WITH CONCAT MAP")
    })


    //Merge MAP // takes the delay only first time and then gives the result at a once
    const videoMergeStream2 = from(['a','b','c']).pipe(
      mergeMap(res=> this.getData(res)),
      take(5),
    )
    videoMergeStream2.subscribe((res)=>{ 
      console.log(res,"OBSERVABLE WITH MERGE MAP")
    })

  }
  getData(data:any){
    return of("concatMap" + data).pipe(delay(2000))
  }
}
