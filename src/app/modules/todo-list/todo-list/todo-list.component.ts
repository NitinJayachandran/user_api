// Angular
import { Component, OnInit, Input } from '@angular/core';

// Rxjs
import { tap } from 'rxjs/operators';

// Store | Selectors | Actions 
import { Store,select } from '@ngrx/store';
import { TodoState } from '../../../store/reducer/todoreducer';
import { markTaskAsComplete } from 'src/app/store/actions/todoaction';
//import { moveTaskToIncomplete } from 'src/app/store/actions/todoaction';
//import { moveTaskToComplete } from 'src/app/store/actions/todoaction';

// Types | Interfaces
import { Todo } from '../../../todo';

// Service
import { TodoService } from '../../../services/todoservice.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() userId: number | undefined;
  todos: Todo[] = [];
  completedTodos: Todo[] = [];
  incompleteTodos: Todo[] = [];
  //showCompletedTasks: boolean = false;

  constructor(private store: Store<TodoState>, private todoService: TodoService) {}

  ngOnInit(): void {
    this.filterTasks();
  }

  filterTasks(): void {
    if (this.userId !== undefined) {
      this.todoService.fetchPosts(this.userId).subscribe((todos: Todo[]) => {
        this.todos = todos;
      });

      /*this.todoService.getCompletedTasksByUserId(this.userId).subscribe((tasks: Todo[]) => {
        this.completedTodos = tasks;
      });*/

      this.todoService.getIncompleteTasksByUserId(this.userId).subscribe((tasks: Todo[]) => {
        this.incompleteTodos = tasks;
      });
    }
  }

  showCompleted(): void {
    if(this.userId!==undefined) {
      this.todoService.getCompletedTasksByUserId(this.userId).subscribe((tasks: Todo[])=>
      {this.completedTodos = tasks;})
    }
  }

  /*hideCompleted(): void {
    this.showCompletedTasks = false;
  }*/

  markTaskAsComplete(taskId: number): void {
    this.todoService.markTaskAsComplete(taskId);
  }
  /*markTaskAsComplete(task: Todo) {
    this.store.dispatch(markTaskAsComplete({ taskId: task.id, userId: task.userId }));
  }*/


  /*showIncomplete(): void{
    if(this.userId!==undefined){
      this.todoService.getIncompleteTasksByUserId(this.userId).subscribe((tasks: Todo[])=>
      {this.incompleteTodos = tasks;})
    }
  }*/









}
