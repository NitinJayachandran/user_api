//http
import { HttpClient } from '@angular/common/http';
//injectable
import { Injectable } from '@angular/core';
// Store | Selectors | Actions 
import { Store, select } from '@ngrx/store';
import { idTasks } from 'src/app/store/actions/todoaction';
import { selectCompletedTasksByUserId, selectIncompleteTasksByUserId } from '../store/selector/todoselector.selector';
//import{ selectTodoState}
import { markTaskAsComplete } from 'src/app/store/actions/todoaction';
//rxjs
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
//types
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient, private store: Store) {}

  fetchPosts(userId: number | undefined): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url).pipe(
      map((response: Todo[]) => {
        const filteredTodos = response.filter(todo => todo.userId == userId);
        this.store.dispatch(idTasks({ tasks: filteredTodos }));
        return filteredTodos; // or return filteredTodos if you only want to return the filtered todos
      })
    );
  }


  getCompletedTasksByUserId(userId: number): Observable<Todo[]> {
    return this.store.select(selectCompletedTasksByUserId(userId));
  }

  getIncompleteTasksByUserId(userId: number): Observable<Todo[]> {
    return this.store.select(selectIncompleteTasksByUserId(userId));
  }

  markTaskAsComplete(taskId: number): void {
    this.store.dispatch(markTaskAsComplete({taskId}));
    
  /*this.store.pipe(select(selectTodoState)).subscribe((state: TodoState) => {
    const completedTasks = state.todos.filter(todo => todo.completed);
    const taskIndex = completedTasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      const completedTask = completedTasks[taskIndex];
      completedTasks.splice(taskIndex, 1); // Remove the task from its current position
      completedTasks.unshift(completedTask); // Add the task to the top
    }
  }).unsubscribe();*/
  
    
  }
}


