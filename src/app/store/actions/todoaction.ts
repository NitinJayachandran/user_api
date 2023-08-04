import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/todo';

/*export const moveTaskToIncomplete = createAction(
    '[Todo] Move Completed Task to Incomplete',
    props<{ Task: Todo }>()
);*/

export const idTasks = createAction(
    '[Todo] Fetch selected Tasks',
    props<{ tasks: Todo[] }>()
  );

export const markTaskAsComplete = createAction(
    '[Todo] Mark task as complete',
    props<{ taskId: number}>()
)

/*export const setCompletedTasks = createAction(
  '[Todo] Set Completed Tasks',
  props<{ Tasks: Todo[] }>()
);

export const setIncompleteTasks = createAction(
  '[Todo] Set Incomplete Tasks',
  props<{ Tasks: Todo[] }>()
);

export const moveTaskToComplete = createAction(
    '[Todo] Move Task To Complete',
    props<{ taskId: number; userId: number }>()
  );*/
  