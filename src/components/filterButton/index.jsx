import React, {useRef} from 'react';
import styled from 'styled-components';

const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Button = styled.button`
  height: 33px;
  border-radius: 17px;
  padding: 6px 16px;
  background: #FFFFFF;
  border: 1px solid #DBDBDB;
  font-size: 14px;
  color: #848484;
`

const FilterButton = (props) => {
  const {done, setDone, pending, setPending, filterTaskButton} = props

  const buttonRef = useRef();

  return (
    <BoxButtons>
      <Button
        id='done'
        onClick={() => {
          setDone(!done)
          setPending(false)
          filterTaskButton('done')
        }}
        ref={buttonRef}
        style={{background: done === true && '#F7F7F8', border: done === true && '1px solid #4DA6B3'}}
        disabled
      >
        Done
      </Button>
      <Button 
        id='pending'
        onClick={() => {
          setPending(!pending)
          setDone(false)
          filterTaskButton('pending')
        }}
        style={{background: pending === true && '#F7F7F8', border: pending === true && '1px solid #4DA6B3'}}
        ref={buttonRef}
        disabled
      >
        Pending
      </Button>
    </BoxButtons>
  );
}

export default FilterButton;
