import { Component } from '@angular/core';
import { Todo } from './viewmodels/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.css'],
  providers: [ TodoService ]
})
export class TodoComponent {

  todos: Todo[] = [];

  constructor(private todoService: TodoService ){

  }

  ngOnInit(){
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    },
    (error) => {
      console.log('Some error has happened');
    });
  }


  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id).subscribe(data => {
      this.todoService.getTodos().subscribe(data => {
        this.todos = data;
      });
    });
  }


}
