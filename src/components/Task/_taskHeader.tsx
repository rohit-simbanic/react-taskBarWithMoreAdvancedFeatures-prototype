import { Box, Chip, Typography } from '@mui/material';
import React, { ReactElement, FC } from 'react';
import { ITaskHeader } from './interfaces/ITaskHeader';
import { format } from 'date-fns';

const TaskHeader: FC<ITaskHeader> = (
  props,
): ReactElement => {
  const { title = 'Default title', date = new Date() } =
    props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={3}
    >
      <Box>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box>
        <Chip
          variant="outlined"
          label={format(date, 'PPP')}
        />
      </Box>
    </Box>
  );
};

export default TaskHeader;
