import { Component } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrl: './concat-merge.component.css'
})
export class ConcatMergeComponent {

  ngOnInit(){
    //CONCAT -----------------------------------------------------------
    // const $interval = interval(2000)
    // const videoStream = $interval.pipe(map(res=>'video' + res),take(5))
    // const newsStream = $interval.pipe(map(res=>'news' + res),take(5))
    // const comedyStream = $interval.pipe(map(res=>'comedy' + res),take(5))
    // const finalObs = concat(videoStream,newsStream,comedyStream)
    // finalObs.subscribe((res)=>console.log(res))

    //MERGE ------------------------------------------------------------
    const videoMergeStream = interval(1000).pipe(map(res=>'mergeVideo' + res),take(5))
    const newsMergeStream = interval(2000).pipe(map(res=>'mergeNews' + res),take(5))
    const comedyMergeStream = interval(3000).pipe(map(res=>'mergeComedy' + res),take(5))
    const finalMergeObs = merge(videoMergeStream,newsMergeStream,comedyMergeStream)
    finalMergeObs.subscribe((res)=>console.log(res))
  }
}
