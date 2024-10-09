import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css'
})
export class PromisesComponent {
  //eg 1 without async /await 
  playFootball(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(true)
      },2000)
    })
  }
  playCricket(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(false)
      },1000)
    })
  }
  withoutAsyncAwait(){
    let doSomething = new Promise((resolve,reject)=>{
       this.playCricket().then((res)=>{
          if(res){
            resolve ("Playing Cricket !!")
          }else{
            this.playFootball().then((res)=>{
              if(res){
                resolve ("Playing Football !!")
              }else{
                reject ("Playing rejected !!")
              }
           })
          }
       })

    })
    doSomething.then((res)=>{
      console.log("Resolved,--",res)
    }).catch((err)=>{
      console.log("Rejected,--",err)
    })
  }
  ngOnInit(){
    this.withoutAsyncAwait()
    this.getData()
  }

  //eg 2 with async /await 
  apiCall(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("DATA CAME VIA API")
    },4000)
  })
  }
  async getData(){
    let response = await this.apiCall()
    console.log(response)
  }
}
