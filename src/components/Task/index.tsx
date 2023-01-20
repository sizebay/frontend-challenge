import ActionButton from '../ActionButton';
import { ActionsContainer, Container } from './style';
import {AiFillCheckCircle, AiFillEdit, AiFillMinusCircle} from 'react-icons/ai';

import { useRef, useState } from 'react';
import { useTasks } from '../../shared/hooks/useTasks';

interface TaskProps {
  content: string
  id: string
  completed: boolean
  event: any
}

function Task({ content, id, completed, event }: TaskProps) {
  const { remove, toggleComplete } = useTasks();

  const editRef = useRef<HTMLInputElement>(null);

  const [editMode, setEditMode] = useState(false);
  const [showActionButtons, setShowActionButtons] = useState(false);

  const handleChangeEditmode = () => {
    setEditMode((prevstate) => !prevstate);
    setShowActionButtons((prevstate) => !prevstate);
  };

  return (
    <Container completed={completed} editMode={showActionButtons}>
      {!editMode && (
        <span
          onClick={() => setShowActionButtons((prev) => !prev)}
        >
          {content}
        </span>
      )}

      {editMode && (
        <>
          <input 
            type='text' 
            autoFocus 
            ref={editRef}
            placeholder={content}
          />
          <ActionButton 
            icon={<AiFillCheckCircle />}
            bg="#5DE290"
            color='#fff'
            event={() => {
              if (editRef.current) {
                event(id, editRef.current.value);
              }
              setEditMode(false);
            }}
          />
        </>
      )}

      {showActionButtons && !editMode &&(
        <>
          <ActionsContainer>
            <ActionButton 
              icon={<AiFillEdit />}
              bg="#e3d44f"
              color='#fff'
              event={handleChangeEditmode}

            />
            <ActionButton 
              icon={<AiFillMinusCircle />}
              bg="#E34F4F"
              color='#fff'
              event={() => remove(id)}
            />
            <ActionButton 
              icon={<AiFillCheckCircle />}
              bg="#5DE290"
              color='#fff'
              event={() => toggleComplete(id)}
            />
          </ActionsContainer>
        </>
      )}

    </Container>
  );
}

export default Task;