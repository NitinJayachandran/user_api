//store
import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/todo';
import { idTasks, markTaskAsComplete } from 'src/app/store/actions/todoaction';
//import { moveTaskToComplete } from 'src/app/store/actions/todoaction';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
    todos: [],
};

export const todoReducer = createReducer(
    initialState,
    on(idTasks, (state, { tasks }) => ({
      ...state,
      todos: tasks
    })),
  

  /*on(markTaskAsComplete, (state, { taskId, userId }) => {
    const updatedTodos = state.todos.map(todo => {
      if (todo.id === taskId && todo.userId === userId) {
        return {
          ...todo,
          completed: true
        };
      }
      return todo;
    });
    return {
      ...state,
      todos: updatedTodos
    };
  })*/

  on(markTaskAsComplete, (state, { taskId }) => {
    const updatedTodos = state.todos.map(todo => {
      if (todo.id === taskId) {
        return { ...todo, completed: true };
      }
      return todo;
    });

    return { ...state, todos: updatedTodos };
  })
);

  
 
  
