import ActionButton from '../ActionButton';
import { ActionsContainer, Container } from './style';
import {AiFillCheckCircle, AiFillEdit, AiFillMinusCircle} from 'react-icons/ai';

import { useState } from 'react';

interface TaskProps {
  content: string
}

function Task({ content }: TaskProps) {
  const [editMode, setEditMode] = useState(false);
  const [showActionButtons, setShowActionButtons] = useState(false);

  const handleChangeEditmode = () => {
    setEditMode((prevstate) => !prevstate);
    setShowActionButtons((prevstate) => !prevstate);
  };

  return (
    <Container editMode={showActionButtons}>
      {!editMode && (
        <span
          onClick={() => setShowActionButtons((prev) => !prev)}
        >
          {content}
        </span>
      )}

      {editMode && (
        <>
          <input type='text' autoFocus placeholder={content}/>
          <ActionButton 
            icon={<AiFillCheckCircle />}
            bg="#5DE290"
            color='#fff'
            event={() => setEditMode(false)}
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
            />
            <ActionButton 
              icon={<AiFillCheckCircle />}
              bg="#5DE290"
              color='#fff'
            />
          </ActionsContainer>

          {/* <EditPopover 
            onClick={handleChangeEditmode}
            data-testid="task-edit-popover"
          >
            Edit task
          </EditPopover> */}
        </>
      )}

    </Container>
  );
}

export default Task;