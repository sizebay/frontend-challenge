import { InputHTMLAttributes } from 'react';

export interface InputStyles {
  $taskItem?: boolean;
  $taskItemDone?: boolean;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, InputStyles {}