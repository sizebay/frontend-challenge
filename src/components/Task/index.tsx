import ActionButton from '../ActionButton';
import { ActionsContainer, Container } from './style';
import {AiFillCheckCircle, AiFillMinusCircle} from 'react-icons/ai';
import * as Popover from '@radix-ui/react-popover';

import { useState } from 'react';

interface TaskProps {
  content: string
}

function Task({ content }: TaskProps) {
  const [editMode, setEditMode] = useState(false);

  const handleChangeEditmode = () => {
    setEditMode((prevstate) => !prevstate);
  };

  return (
    <Container editMode={editMode}>
      <Popover.Root>
        {!editMode && (
          <Popover.Trigger 
            asChild 
            aria-label="Open popover to able edit task"
          > 
            <span>{content}</span>
          </Popover.Trigger>
        )}

        {editMode && (
          <input type='text' autoFocus placeholder={content}/>
        )}

        {editMode && (
          <ActionsContainer>
            <ActionButton 
              icon={<AiFillMinusCircle />}
              bg="#E34F4F"
              color='#fff'
            />
            <ActionButton 
              icon={<AiFillCheckCircle />}
              bg="#5DE290"
              color='#fff'
              event={handleChangeEditmode}
            />
          </ActionsContainer>
        )}

        <Popover.Portal>
          <Popover.Content 
            data-testid="task-edit-popover"
            style={{
              backgroundColor: '#848484',
              border: 'none',
              padding: '0.5rem',
              borderRadius: '0.25rem',
            }}
          >
            <Popover.Arrow style={{
              fill: '#848484',
              height: '0.5rem'
            }}/>
            <Popover.Close 
              aria-label="Edit task button"
              data-testid="task-close-popover"
              style={{
                appearance: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'white',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onClick={handleChangeEditmode}
            >
              Edit task
            </Popover.Close>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </Container>
  );
}

export default Task;