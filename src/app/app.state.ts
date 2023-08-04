import { Todo } from './todo';

export interface AppState {
  todos: Todo[];
  completedTasks: Todo[];
  incompleteTasks: Todo[];
}
