import { FC } from 'react';
import * as S from './index.style';
import { ButtonIconProps } from './index.types';
import { Button, Icon } from '../../atoms';

export const ButtonIcon: FC<ButtonIconProps> = ({ icon, ...rest }) => {

  return <Button
    isIcon
    {...rest}
  >
    <S.ButtonIcon> <Icon type={icon} /></S.ButtonIcon>
  </Button>;
};
