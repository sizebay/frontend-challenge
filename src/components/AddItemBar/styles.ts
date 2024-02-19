import { IoMdAddCircle } from 'react-icons/io'
import { rgba } from 'polished'
import styled from 'styled-components'

export const AddItemBarContainer = styled.div`
  width: 42.5rem;
  height: 3rem;
  margin-bottom: 1rem;

  display: flex;
`

export const ItemForm = styled.form`
  display: flex;
  width: 42.5rem;
`

export const ItemInput = styled.input`
  width: 100%;
  padding: 0.6rem;

  font-size: 0.87rem;
  letter-spacing: 0px;

  border: 1px solid ${(props) => props.theme['gray-500']};
  border-radius: 4px 0px 0px 4px;

  color: ${(props) => props.theme['gray-600']};
  background: ${(props) => rgba(props.theme['gray-200'], 0.5)};
`

export const SubmitButton = styled.button`
  width: 2.75rem;
  height: 3rem;

  cursor: pointer;

  opacity: 0.5;
  border: none;
  border-radius: 0px 4px 4px 0px;
  background: ${(props) => props.theme.blue};
`

export const AddIcon = styled(IoMdAddCircle)`
  width: 1.25rem;
  height: 1.25rem;
  color: ${(props) => props.theme.white}
`