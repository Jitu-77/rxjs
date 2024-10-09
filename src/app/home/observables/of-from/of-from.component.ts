import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css'
})
export class OfFromComponent {
  ngOnInit(){
    //OF-------------------
    const ofObs1 = of("asd","qwe","vbn")
    ofObs1.subscribe((res)=>{
      console.log("ofObs1",res)
    })
    const ofObs2 = of(
      {name:"asd",age:"12"},
      {name:"qwe",age:"13"},
      {name:"zxc",age:"14"},
    )
    ofObs2.subscribe((res)=>{
      console.log("ofObs2",res)
    })
    //FROM --------------------
    const fromObs1 = from(["asd","qwe","vbn"])
    fromObs1.subscribe((res)=>{
      console.log("fromObs1",res)
    })
    const fromObs2 = from([
      { name: 'asd', age: '12' },
      { name: 'qwe', age: '13' },
      { name: 'zxc', age: '14' },
    ]);
    fromObs2.subscribe((res) => {
      console.log('fromObs2', res);
    });
    const promise = new Promise((res,rej)=>{
      setTimeout(()=>{
        res("resolved successfully")
      },4000)
    })
    const fromObs3 = from(promise)
    fromObs3.subscribe((res)=>{
      console.log("promise conversion to observables fromObs3",res)
    })
    const fromObs4 = from("Hello World")
    fromObs4.subscribe((res)=>{
      console.log("string conversion to observables fromObs4",res)
    })
  }
}
