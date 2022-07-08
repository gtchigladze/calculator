import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DisplayModule } from './display/display.module';
import { KeyboardModule } from './keyboard/keyboard.module';
import { ServiceModule } from './service/service.module';
import { TerminalModule } from './terminal/terminal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    DisplayModule,
    CommonModule,
    TerminalModule,
    ServiceModule,
    KeyboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
