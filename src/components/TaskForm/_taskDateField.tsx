import React, { ReactElement, FC } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { IDateField } from './interfaces/IDateField';

const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  const {
    value = dayjs(new Date()),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date Picker"
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
      </LocalizationProvider>
    </>
  );
};

export default TaskDateField;
