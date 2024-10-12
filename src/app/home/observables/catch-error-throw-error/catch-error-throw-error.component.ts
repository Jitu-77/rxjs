import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'app-catch-error-throw-error',
  templateUrl: './catch-error-throw-error.component.html',
  styleUrl: './catch-error-throw-error.component.css'
})
export class CatchErrorThrowErrorComponent {
  constructor(private utilityService :UtilityService){
    
  }
  ngOnInit(){
    //1------------- WITHOUT CATCH ERROR AND THROW ERROR
    // this.utilityService.putData(2).subscribe(
    //   (res)=>{
    //     console.log(res)
    //   },(err)=>{
    //     console.log(err)
    //     console.log(err.error)
    //     console.log(err.error.error)
    //   }
    // )

    //2--------------------- WITH  CATCH ERROR AND THROW ERROR
    this.utilityService.putData(2).subscribe(
      (res)=>{
        console.log(res)
      },(err)=>{
        console.log(err)
        // console.log(err.error)
        // console.log(err.error.error)
      }
    )
  }
}
