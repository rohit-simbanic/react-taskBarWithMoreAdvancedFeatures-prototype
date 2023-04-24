import { Box, Typography } from '@mui/material';
import React, { ReactElement, FC } from 'react';
import { ITaskDescTask } from './interfaces/ITaskDescTask';

const TaskDescriptionTask: FC<ITaskDescTask> = (
  props,
): ReactElement => {
  const {
    description = 'This is a test dynamic description',
  } = props;
  return (
    <Box>
      <Typography variant="h5">{description}</Typography>
    </Box>
  );
};

export default TaskDescriptionTask;
