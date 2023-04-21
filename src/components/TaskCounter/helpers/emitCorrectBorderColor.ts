import { Status } from '../../TaskForm/enums/Status';
import { TaskCounterStatus } from '../Interfaces/ITaskCounter';

export const emitCorrectBorderColor = (
  status: TaskCounterStatus,
): string => {
  {
    switch (status) {
      case Status.todo:
        return 'error.light';
      case Status.inProgress:
        return 'warning.light';
      case Status.completed:
        return 'success.light';
    }
  }
};
