import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal/terminal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TerminalComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[TerminalComponent]
})
export class TerminalModule { }
