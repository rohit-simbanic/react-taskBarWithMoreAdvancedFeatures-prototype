import React, { ReactElement, FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {
  SelectChangeEvent,
} from '@mui/material/Select';
import { ISelectField } from './interfaces/ISelectField';

const TaskSelectField: FC<ISelectField> = (
  props,
): ReactElement => {
  const {
    value = '',
    label = 'select Box',
    name = 'select Box',
    items = [{ value: '', label: 'Add item' }],
    disabled = false,
    onChange = (e: SelectChangeEvent) => console.log(e),
  } = props;
  return (
    <FormControl
      fullWidth
      sx={{ m: 1, minWidth: 120 }}
      size="small"
    >
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId="taskid"
        id={`${name}-id-select`}
        value={value}
        label={label}
        onChange={onChange}
        name={name}
        disabled={disabled}
      >
        {items.map((item, i) => (
          <MenuItem key={i} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TaskSelectField;
