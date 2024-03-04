import { FC } from 'react';
import * as S from './index.style';
import { FormGroupProps } from './index.types';

export const FormGroup: FC<FormGroupProps> = ({ children }) => {

  return <S.FormGroup>
    {children}
  </S.FormGroup>;
};
