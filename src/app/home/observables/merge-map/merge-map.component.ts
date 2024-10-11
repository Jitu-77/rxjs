import { Component } from '@angular/core';
import { interval, map, mergeAll, mergeMap, of, take } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.css'
})
export class MergeMapComponent {
  ngOnInit(){
    // using double subscription
    // const videoMergeStream = interval(1000).pipe(map(res=> this.getData(res)),take(5))
    // videoMergeStream.subscribe((res)=>{ 
    //   console.log(res,"OBSERVABLE")
    //   res.subscribe((response)=>{
    //     console.log(response,"OBSERVABLE FINAL RESPONSE")
    //   })
    // })

    // Using Merge All
    // const videoMergeStream = interval(1000).pipe(
    //   map(res=> this.getData(res)),
    //   mergeAll(),
    //   take(5),
    // )
    // videoMergeStream.subscribe((res)=>{ 
    //   console.log(res,"OBSERVABLE WITH MERGE ALL")
    // })

    //Merge MAP
    const videoMergeStream = interval(1000).pipe(
      mergeMap(res=> this.getData(res)),
      take(5),
    )
    videoMergeStream.subscribe((res)=>{ 
      console.log(res,"OBSERVABLE WITH MERGE MAP")
    })
  }
  getData(data:any){
    return of("mergeMap" + data)
  }
}
