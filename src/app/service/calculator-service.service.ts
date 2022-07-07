import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, ReplaySubject, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  // calculateResult: string[] = []
  private subject = new BehaviorSubject<any>([]);

  calculateResult = new BehaviorSubject(['50', '20'] );
  // data: Observable<string[]> = this.calculateResult.asObservable();

  constructor() { }

  calculateExpression(expression: string[]) {
    // console.log(expression);  
    
    let result = [];

    const firstOperand = Number(expression[0]);
  const operationType = expression[1];
  const secondOperand = Number(expression[2]);

  if (operationType === '+') {
    // return firstOperand + secondOperand;
    result.push(firstOperand + secondOperand);
  } 

  // if (operationType === '-') {
  //   return firstOperand - secondOperand;
  // }

    this.calculateResult.next([String(result)]);
    
  }


// addResultArray(result: string){
//   this.subject.next(this.calculateResult.push(result))
// }

getResult(){
return  this.subject
}


}
