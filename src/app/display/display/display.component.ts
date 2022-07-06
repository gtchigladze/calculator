import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
calculateResult: any[] = []

  constructor() { }

  ngOnInit(): void {
  }
  getResult() {
    // use in service 
  }
  clearResult() {
    // clear displaygit 
  }

}
