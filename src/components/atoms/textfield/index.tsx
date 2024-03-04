import { FC, useMemo } from 'react';
import * as S from './index.style';
import { TextfieldProps } from './index.types';
import { Icon } from '..';

export const Textfield: FC<TextfieldProps> = ({ iconSuffix, onBlur, onChange, onFocus, onKeyDown, placeholder, popover, readOnly, size, value }) => {

  const isControlled = useMemo(() => {
    return value ?? false;
  }, [])

  const valueController = useMemo(() => {
    if (isControlled === false) return undefined;

    return value || '';
  }, [isControlled, value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const { value, name } = e.target;
      onChange(value, name);
    }
  }

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      const { value, name } = e.target;
      onBlur(value, name);
    }
  }

  const renderPopover = useMemo(() => {
    if (!popover) return null;
    return {
      'data-toggle': popover,
      'data-trigger': 'hover',
      title: popover
    }
  }, [popover]);

  return <S.Textfield {...renderPopover}>
    <S.TextfieldInput
      readOnly={readOnly}
      placeholder={placeholder}
      size={size || 'normal'}
      onBlur={handleOnBlur}
      onChange={handleChange}
      onFocus={onFocus}
      value={valueController}
      onKeyDown={onKeyDown}
    />

    {
      iconSuffix && <S.TextfieldIconSuffix> <Icon type={iconSuffix} /> </S.TextfieldIconSuffix>
    }
  </S.Textfield>;
};
