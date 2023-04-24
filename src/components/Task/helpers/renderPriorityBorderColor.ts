import React from 'react';
import { Priority } from '../../TaskForm/enums/Priority';

export const renderPriorityBorderColor = (
  priority: string,
): string => {
  switch (priority) {
    case Priority.normal:
      return 'grey.900';
    case Priority.high:
      return 'info.light';
    case Priority.extreme:
      return 'error.light';
    default:
      return 'grey.900';
  }
};
