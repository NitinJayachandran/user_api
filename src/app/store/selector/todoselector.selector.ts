/*import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Todo } from '../../todo';
import { TodoState } from '../reducer/todoreducer';

// Selector to get all todos from the state
export const selectAllTodos = (state: TodoState) => state.todos;

// Selector to filter todos based on userId
export const selectTodos = createSelector(
    selectAllTodos,
    (todos: Todo[], props: { userId: number | undefined }) => {
      const { userId } = props;
      if (userId !== undefined) {
        return todos.filter(todo => todo.userId === userId);
      } else {
        return todos;
      }
    }
  );


// Selector to get completed tasks
export const selectCompletedTasks = createSelector(selectAllTodos, (todos: Todo[]) =>
  todos.filter(todo => todo.completed)
);

// Selector to get incomplete tasks
export const selectIncompleteTasks = createSelector(selectAllTodos, (todos: Todo[]) =>
  todos.filter(todo => !todo.completed)
);


/*export const selectTodos = (state: TodoState, userId: number | undefined) =>
  state.todos.filter(todo => todo.userId === userId);*/

  import { createSelector, createFeatureSelector } from '@ngrx/store';
  import { TodoState } from '../reducer/todoreducer';
  import { Todo } from '../../todo';
  
  const selectTodoState = createFeatureSelector<TodoState>('todos');
  
  export const selectAllTodos = createSelector(
    selectTodoState,
    (state: TodoState) => state.todos
  );
  
  export const selectTodos = (userId: number | undefined) => createSelector(
    selectAllTodos,
    (todos: Todo[]) => {
      if (userId !== undefined) {
        return todos.filter(todo => todo.userId == userId);
      } else {
        return todos;
      }
    }
  );
  export const selectCompletedTasksByUserId = (userId: number) => createSelector(
    selectAllTodos,
    (todos: Todo[]) => {
      return todos.filter(task => task.userId == userId && task.completed);
    }
  );
  
  export const selectIncompleteTasksByUserId = (userId: number) => createSelector(
    selectAllTodos,
    (todos: Todo[]) => {
      return todos.filter(task => task.userId == userId && !task.completed);
    }
  );
  
  
  