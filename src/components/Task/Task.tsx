import { Box } from '@mui/material';
import React, { ReactElement, FC } from 'react';
import TaskHeader from './_taskHeader';
import TaskDescriptionTask from './_taskDescription';
import TaskFooter from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Priority } from '../TaskForm/enums/Priority';
import { Status } from '../TaskForm/enums/Status';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'test title',
    date = new Date(),
    description = 'test description',
    priority = Priority.normal,
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'Background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescriptionTask description={description} />
      <TaskFooter
        onStatusChange={onStatusChange}
        onClick={onClick}
      />
    </Box>
  );
};

export default Task;
