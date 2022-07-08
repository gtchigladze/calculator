import { Component, OnInit } from '@angular/core';
import { KeyboardComponent } from 'src/app/keyboard/keyboard/keyboard.component';
import { CalculatorServiceService } from 'src/app/service/calculator-service.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  operation:string[] = []

  number: string[] = [];

  
  constructor(private service: CalculatorServiceService,) { }

  value: string[] = ['22'];

  parseOperation(operation: string) {
    
    
    const parsetExpresstion = this.parseExpression(operation);

    console.log(parsetExpresstion);
  console.log(this.operation)

    this.service.calculateExpression(parsetExpresstion)
    
  }

  parseExpression(expression: string): string[] {
 
    return [expression]
  
  }

  mult(){

    
    let operand = '';
    
    let result = [];
    
    console.log(this.operation)
    // result.push(this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v);
    
  }

  

  ngOnInit(): void {

    // this.service.keyBoard.subscribe(data => this.operation += data)
    // this.service.operator.subscribe(data => this.operation = data)
    this.service.teminalInput.subscribe((input: string[]) => {this.operation = input, console.log(`oooooo ${this.operation}`)})
  }
// getTerminalNumber(){
//   this.service.addResultArray(this.value)
//   console.log(this.value)
// }

resetTerminal(){
  //reset Terminal
}


}
