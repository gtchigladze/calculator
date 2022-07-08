import { Injectable } from '@angular/core';
import { BehaviorSubject, findIndex, from, Observable, ReplaySubject, shareReplay } from 'rxjs';

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
    let operandsArray = [...expression];
    let operand = '';
    
    let result = [];

    for (let i = 0; i < operandsArray.length; i++) {
      if (operandsArray[i] === ' ') {
        continue;
      }
      operand += operandsArray[i];
      console.log(`operand ${operand}`)
    }
    let split = operand.split('+')
    console.log(`split ${operand}`);

    const firstOperand = Number(split[0]);
    const secondOperand = Number(split[1]);
  if (split.length != 0) {
    // return firstOperand + secondOperand;
   result.push(firstOperand + secondOperand);
  
  } 
console.log(result)
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



// function m(str) {
//   let split = str.split('+');
//   const firstOperand = Number(split[0]);
//   // const operationType = split[1];
//   const secondOperand = Number(split[1]);
//   if (split.length != 0) {
//     return firstOperand + secondOperand;
//   }
// }
// console.log(m('5 + 10'));



// function m(str:string[]) {
// let findIndex = str.findIndex('+')
//   let split = str.split('+');
//   const firstOperand = Number(split[0]);
//   // const operationType = split[1];
//   const secondOperand = Number(split[1]);
//   if (split.length != 0) {
//     return firstOperand + secondOperand;
//   }
// }
// console.log(m('5 + 10'));
