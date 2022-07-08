import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalculatorServiceService } from 'src/app/service/calculator-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  
  // changeDetection: ChangeDetectionStrategy.OnPush


})
export class DisplayComponent implements OnInit {
calculateResult: any[] = []

  $vm = this.service.calculateResult;  

  constructor(private service: CalculatorServiceService) { }

  ngOnInit(): void {

    

  }
  getResult() {
  return this.service.getResult().subscribe(res => this.calculateResult= res)
  }
  clearResult() {
    // clear displaygit 
  }

}
