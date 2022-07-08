import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal/terminal.component';
import { FormsModule } from '@angular/forms';
import { KeyboardModule } from '../keyboard/keyboard.module';
import { KeyboardComponent } from '../keyboard/keyboard/keyboard.component';



@NgModule({
  declarations: [
    TerminalComponent
  ],
  imports: [
    CommonModule, FormsModule,
  ],
  exports:[TerminalComponent]
})
export class TerminalModule { }
