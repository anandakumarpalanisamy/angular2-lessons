import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoComponent} from './todo.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    TodoComponent
  ],
  bootstrap: [
    TodoComponent
  ]
})
export class TodoModule { }
