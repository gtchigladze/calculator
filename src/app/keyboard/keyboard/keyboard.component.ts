import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalculatorServiceService } from 'src/app/service/calculator-service.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  currentNumber = '0';
  waitForSecondNumber = false;
  operator = ''
  result: string[] = []

  expression:string[] = [];




  
  constructor(private service: CalculatorServiceService) { }

  ngOnInit(): void {
    
  }

  getNumber(v: string){

    let result = []
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
     this.result.push(this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v);
     
    }
    console.log(this.result)
    
    

    // this.service.teminalInput.next(result);


    this.service.teminalInput.next(this.result);

    // const number = this.parseExpression(v)
    // this.service.calculateExpression(number)
    // this.service.keyBoardOperator(result)
  }

  parseExpression(expression: string): string[] {
    return [expression]
  }

  getOperation(op: string){
    let result = []
    this.result.push(op);
    // console.log(result)
    this.service.teminalInput.next(this.result);
    // this.service.keyOperator(result)

    // const number = this.parseExpression(op)
    // this.service.calculateExpression(number)
  }

 


}
