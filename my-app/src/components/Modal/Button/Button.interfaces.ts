import { ButtonHTMLAttributes, ReactElement } from 'react';

export interface ButtonStyles {
  $clicked?: boolean;
  $filterButton?: boolean;
  $addButton?: boolean;
  $excludeButton?: boolean;
  $doneButton?: boolean;
  $searchButton?: boolean;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyles {
  icon?: ReactElement;
}