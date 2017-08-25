import { Injectable } from '@angular/core';
import { Todo } from '../viewmodels/todo';

    const todos: Todo[] = [
        new Todo({
            name: 'Angular Session 1'
        }),
        new Todo({
            name: 'Angular Session 2'
        })
    ];

@Injectable()
export class TodoService {    
    public getTodos(){
        return todos;
    }
}