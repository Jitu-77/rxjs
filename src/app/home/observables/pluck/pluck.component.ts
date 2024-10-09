import { Component } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.css'
})
export class PluckComponent {
ngOnInit(){
  const fromObs1 = from([
    { name: 'asd', age: '12' ,job:{skill:"js",type:"angular"}},
    { name: 'qwe', age: '13' ,job:{skill:"java",type:"Spring Boot"}},
    { name: 'zxc', age: '14' ,job:{skill:"C#",type:".Net"}},
  ]);
  fromObs1.pipe(map((data)=>data.job.skill),toArray()).subscribe((res) => {
    console.log('fromObs1 by Map', res);
  });
  const fromObs2 = from([
    { name: 'asd', age: '12' ,job:{skill:"js",type:"angular"}},
    { name: 'qwe', age: '13' ,job:{skill:"java",type:"Spring Boot"}},
    { name: 'zxc', age: '14' ,job:{skill:"C#",type:".Net"}},
  ]);
  fromObs2.pipe(pluck('job','skill'),toArray()).subscribe((res) => {
    console.log('fromObs2 By Pluck', res);
  });
}
}
