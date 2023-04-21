import React, { ReactElement, FC } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import TaskTitle from './_taskTitle';
import TaskDescription from './_taskDescription';
import TaskDateField from './_taskDateField';
import TaskSelectField from './_taskSelectField';

const CreatTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitle />
        <TaskDescription />
        <TaskDateField />

        <Stack direction="row" spacing={2}>
          <TaskSelectField />
          <TaskSelectField />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreatTaskForm;
