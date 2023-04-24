import { ITaskDescTask } from './ITaskDescTask';
import { ITaskFooter } from './ITaskFooter';
import { ITaskHeader } from './ITaskHeader';

export interface ITask
  extends ITaskHeader,
    ITaskDescTask,
    ITaskFooter {
  id?: string;
  priority?: string;
  status?: string;
}
