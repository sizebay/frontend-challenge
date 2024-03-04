import { FC } from 'react';
import { IconProps } from './index.types';

export const Icon: FC<IconProps> = ({ type }) => {

  return <span className="material-symbols-outlined">
    {type}
  </span>;
};
