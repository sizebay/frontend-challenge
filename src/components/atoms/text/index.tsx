import { FC } from 'react';
import * as S from './index.style';
import { TextProps } from './index.types';

export const Text: FC<TextProps> = ({ children, ...rest }) => {

  return <S.Text {...rest}>{children}</S.Text>;
};
