import { KeyboardEvent, useCallback, useMemo, useState } from "react";
import { FormGroup, Textfield } from "../../atoms";
import { ButtonIcon } from "../../molecules";
import { ToDoListItemProps } from "./index.types";
import { handleKeyboardListener } from "../../../service/keyboard-shortcut";

export const ToDoListItem = ({ finishItem, item, removeItem, updateDescription }: ToDoListItemProps) => {
  const [description, setDescription] = useState(item.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateDescription = useCallback(() => {
    updateDescription(item.id, description);
    setTimeout(() => setIsEditing(false), 200);
  }, [description]);

  const handleShortcut = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'd') handleKeyboardListener(e as any, 'd', { pressCtrl: true, pressMeta: true, preventDefault: true }, () => removeItem(item.id));
    if (e.key === 'f') handleKeyboardListener(e as any, 'f', { pressCtrl: true, pressMeta: true, preventDefault: true }, () => removeItem(item.id));
  }

  const canEdit = useMemo(() => {
    return item.status !== 'DONE' && isEditing;
  }, [item.status, isEditing])

  const popoverMessage = useMemo(() => {
    if (item.status === 'DONE') return 'Task is done'

    return 'Edit task'
  }, [item.status]);

  return <FormGroup>
    <Textfield
      size='large'
      readOnly={!canEdit}
      value={description}
      onBlur={handleUpdateDescription}
      onChange={description => setDescription(description)}
      onFocus={() => setIsEditing(true)}
      popover={popoverMessage}
      onKeyDown={handleShortcut}
    />
    {
      canEdit && <>
        <ButtonIcon icon='remove' size='large' variant='danger' onClick={() => removeItem(item.id)} />
        <ButtonIcon icon='check' size='large' variant='success' onClick={() => finishItem(item.id)} />
      </>
    }
  </FormGroup>;
};
