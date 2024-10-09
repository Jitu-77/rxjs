import { Component } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  ngOnInit(){
    const mapInt1 = interval(1000)
    let map1 : Subscription = mapInt1.pipe(map((res)=> "map"+res)).subscribe((res)=> {
      console.log(res)
    })
    setTimeout(()=>{
      map1.unsubscribe()
    },6000)


    const fromObs1 = from([
      { name: 'asd', age: '12' },
      { name: 'qwe', age: '13' },
      { name: 'zxc', age: '14' },
    ]);
    fromObs1.pipe(map((data)=>data.name)).subscribe((res) => {
      console.log('fromObs1', res);
    });
  }
}
