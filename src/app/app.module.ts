import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MagicSquareComponent } from './magic-square.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MagicSquareComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
