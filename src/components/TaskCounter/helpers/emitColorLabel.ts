import { Status } from '../../TaskForm/enums/Status';
import { TaskCounterStatus } from '../Interfaces/ITaskCounter';

export const emitColorLabel = (
  status: TaskCounterStatus,
): string => {
  switch (status) {
    case Status.todo:
      return `Todo's`;
    case Status.inProgress:
      return `In Progress`;
    case Status.completed:
      return `Completed`;
  }
};
