import { Component, OnInit } from '@angular/core';
import { CalculatorServiceService } from 'src/app/service/calculator-service.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  operation = '25 * 2'

  

  constructor(private service: CalculatorServiceService) { }

  // value: string = '1+2';

  parseOperation(operation: string) {
    console.log(operation);

    const parsetExpresstion = this.parseExpression(operation);

    this.service.calculateExpression(parsetExpresstion)
    
  }

  parseExpression(expression: string): string[] {
    return ['1', '+', '1'];
  }

  ngOnInit(): void {
  }
// getTerminalNumber(){
//   this.service.addResultArray(this.value)
//   console.log(this.value)
// }

resetTerminal(){
  //reset Terminal
}


}
