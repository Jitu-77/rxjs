import { Component } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  ngOnInit(){
    const fromObs1 = from([
      { name: 'asd', age: '12' ,job:{skill:"js",type:"angular"}},
      { name: 'qwe', age: '13' ,job:{skill:"java",type:"Spring Boot"}},
      { name: 'cvb', age: '14' ,job:{skill:"java",type:"Core Java"}},
      { name: 'fgh', age: '18' ,job:{skill:"C#",type:".Net"}},
      { name: 'jkl', age: '19' ,job:{skill:"C#",type:".Net"}},
      { name: 'iop', age: '21' ,job:{skill:"C#",type:".Net"}},
    ]);
    fromObs1.pipe(filter((data)=> Number(data.age)<20),toArray()).subscribe((res) => {
      console.log('fromObs1 By Filter', res);
    });
  }

}
