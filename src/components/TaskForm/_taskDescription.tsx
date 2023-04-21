import TextField from '@mui/material/TextField';
import React, { ReactElement, FC } from 'react';
import { ITextField } from './interfaces/ITextField';

const TaskDescription: FC<ITextField> = (
  props,
): ReactElement => {
  const {
    onChange = (e) => console.log(e.target.value),
    disabled = false,
  } = props;
  return (
    <TextField
      id="description"
      //   label="Task Description"
      placeholder="Task Description"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      multiline
      rows={4}
      onChange={onChange}
      disabled={disabled}
    ></TextField>
  );
};

export default TaskDescription;
