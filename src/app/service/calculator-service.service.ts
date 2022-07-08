import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, findIndex, from, Observable, ReplaySubject, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  // calculateResult: string[] = []
  private subject = new BehaviorSubject<any>([]);

  // @Output() keyBoard = new EventEmitter<string[]>();
  // @Output() operator = new EventEmitter<string[]>();


  calculateResult = new BehaviorSubject(['Display'] );
  teminalInput = new BehaviorSubject(['']);

  

  // data: Observable<string[]> = this.calculateResult.asObservable();

  constructor() { }


  // keyBoardOperator(msg: string[]){
  //   this.keyBoard.emit(msg)
  // }
  // keyOperator(msg:string[]){
  //        this.operator.emit(msg)
  // }

  calculateExpression(expression: string[]) { 
    let operandsArray = [...expression];
    let operand = '';
    
    let result = [];

    for (let i = 0; i < operandsArray.length; i++) {
      if (operandsArray[i] === ' ') {
        continue;
      }
      operand += operandsArray[i];
    
    }

    let splitPlus = operand.split('+')
    let splitMultiplication = operand.split('*')
    let splitMinus = operand.split('-')
    let splitDivide = operand.split('/')


    console.log(`split::: ${splitPlus}`);
    const firstOperand = Number(splitPlus[0]);
    const secondOperand = Number(splitPlus[1]);

    const firstMinus = Number(splitMinus[0]);
    const secondMinus = Number(splitMinus[1]);

    const firstMulti = Number(splitMultiplication[0]);
    const secondMulti = Number(splitMultiplication[1]);

    const firstDivide = Number(splitDivide[0]);
    const secondDivide = Number(splitDivide[1]);

  if (splitPlus.length != 0) {
   if(firstOperand && secondOperand){
    result.push(firstOperand + secondOperand);
   }
  } 

  if (splitMinus.length != 0) {
    if(firstMinus && secondMinus){
     result.push(firstMinus - secondMinus);
    }
   }


  if (splitMultiplication.length != 0) {
    if(firstMulti && secondMulti){
     result.push(firstMulti * secondMulti);
    }
   }

   if (splitDivide.length != 0) {
    if(firstDivide && secondDivide){
     result.push(firstDivide / secondDivide);
    }
   }

   console.log(`result - ${result}`)

  this.calculateResult.next([String(result)]);
  
    
  }


  

// addResultArray(result: string){
//   this.subject.next(this.calculateResult.push(result))
// }

getResult(){
return  this.subject
}


}


