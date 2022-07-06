import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  constructor() { }

  value!: string

  ngOnInit(): void {
  }
getTerminalNumber(){
  // use service
}

resetTerminal(){
  //reset Terminal
}


}
