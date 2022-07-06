import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, ReplaySubject, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  // calculateResult: string[] = []
  private subject = new BehaviorSubject<any>([]);

  calculateResult = new BehaviorSubject(['50', '20'] ); 


  constructor() { }

  calculateExpression(expression: string[]) {
    console.log(expression);    
    this.calculateResult.next(['3']);
    
  }


// addResultArray(result: string){
//   this.subject.next(this.calculateResult.push(result))
// }

getResult(){
return  this.subject
}


}
