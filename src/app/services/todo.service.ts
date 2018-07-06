import { Injectable } from '@angular/core';
import { Todo } from '../viewmodels/todo';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TodoService {

    options;
    url = 'http://localhost:3000/api/tasks';

    constructor(private http: Http){
        this.options = new RequestOptions();
    }

    public getTodos(): Observable<Todo[]>{
        return this.http.get(this.url)
            .map((res: Response) => this.mapTodos(res.json()))
            .catch(this.handleError);
    }

    public deleteTodo(id: string): Observable<Response> {
      return this.http.delete(this.url + '/' + id)
        .map(res => res.json())
        .catch(this.handleError);
    }

    private mapTodos(response){
        let todos: Todo [] = [];
        for(let i=0; i<response.data.length; i++){
            todos.push(new Todo({
                id: response.data[i]._id,
                name: response.data[i].taskDescription,
                status: response.data[i].taskStatus ? response.data[i].taskStatus : '-',
                priority: response.data[i].taskPriority,
                startDate: response.data[i].taskStartDate ? new Date(response.data[i].taskStartDate).toDateString() : '-',
                endDate: response.data[i].taskEndDate ? new Date(response.data[i].taskEndDate).toDateString() : '-',
            }));

        }
        return todos;
    }

    private handleError(error){
        return Observable.throw(error.json().error);
    }

};
