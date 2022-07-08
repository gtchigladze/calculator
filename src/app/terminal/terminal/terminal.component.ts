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

  value: string[] = ['22'];

  parseOperation(operation: string) {
    

    const parsetExpresstion = this.parseExpression(operation);

    console.log(parsetExpresstion);

    this.service.calculateExpression(parsetExpresstion)
    
  }

  parseExpression(expression: string): string[] {
 


    // let x = ['1', '+', '1']

    // const result =x.reduce((acc:any, curr:any) => acc[0] + curr[2])
    // console.log(result)
    // return ['1', '+', '1'];
    return [expression]

   
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
