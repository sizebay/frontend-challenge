import { render, screen, fireEvent } from '@testing-library/react';
import List from '../../../Components/List';
import '@testing-library/jest-dom'

test('it should have input for new task on screen', () => {
  render(<List />)

  const inputId = screen.getByTestId('new-task');
  expect(inputId).toBeInTheDocument();
});

test('it should pass a text to input value', () =>{
  render(<List />)

  const inputId = screen.getByTestId('new-task');
  fireEvent.change(inputId, {target: {value: 'task1'}})
  expect(inputId).toHaveValue('task1')
});

test('it should create a new TODO task', () =>{
  render(<List />)

  const inputId = screen.getByTestId('new-task');
  const addBtn = screen.getByTestId('add-task-btn');

  fireEvent.change(inputId, {target: {value: 'task1'}})
  
  expect(inputId).toHaveValue('task1')
  expect(addBtn).toBeInTheDocument()

  fireEvent.click(addBtn)
})
