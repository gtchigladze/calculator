import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  calculateResult: string[] = []
  private subject = new BehaviorSubject<any>([]);


  constructor() { }


addResultArray(result: string){
  this.subject.next(this.calculateResult.push(result))
}

getResult(){
return  this.subject
}


}
