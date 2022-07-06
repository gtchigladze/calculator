import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorServiceService } from './calculator-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[CalculatorServiceService]
})
export class ServiceModule { }
