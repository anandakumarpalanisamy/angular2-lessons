import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { TodoComponent} from './todo.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [
    TodoComponent
  ],
  bootstrap: [
    TodoComponent
  ]
})
export class TodoModule { }
