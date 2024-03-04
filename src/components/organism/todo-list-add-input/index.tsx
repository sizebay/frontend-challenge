import { FC, useCallback, useMemo, useState } from 'react';
import { FormGroup, Textfield } from '../../atoms';
import { ButtonIcon } from '../../molecules';
import { ToDoListAddInputProps } from './index.types';
import { handleKeyboardListener } from '../../../service/keyboard-shortcut';

export const ToDoListAddInput: FC<ToDoListAddInputProps> = ({ addItem }) => {
  const [newItem, setNewItem] = useState<string>('');

  const disableInsertNewItem = useMemo(() => {
    return !newItem;
  }, [newItem])

  const handleAddItem = useCallback(() => {
    if (disableInsertNewItem) return;

    addItem(newItem);
    setNewItem('');
  }, [disableInsertNewItem, newItem]);

  return <FormGroup>
    <Textfield
      placeholder='Add new item'
      size='large'
      onChange={(value) => setNewItem(value)}
      value={newItem}
      onKeyDown={e => handleKeyboardListener(e as any, 'enter', null, handleAddItem)}
    />
    <ButtonIcon
      disabled={disableInsertNewItem}
      icon='add'
      size='large'
      variant='info'
      onClick={handleAddItem}
    />
  </FormGroup>;
};
