import TextField from '@mui/material/TextField';
import React, { ReactElement, FC } from 'react';
import { ITextField } from './interfaces/ITextField';

const TaskTitle: FC<ITextField> = (props): ReactElement => {
  const {
    onChange = (e) => console.log(e.target.value),
    disabled = false,
  } = props;
  return (
    <TextField
      id="title"
      //   label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    ></TextField>
  );
};

export default TaskTitle;
