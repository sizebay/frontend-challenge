import { render, screen, fireEvent } from '@testing-library/react';
import List from '../../../Components/List';
import '@testing-library/jest-dom'
import { TodoProvider } from '../../../Provider/Todo';

describe('List Component tests', () => {
  
  test('it should have input for new task on screen', () => {
    render(<List />)
  
    const inputId = screen.getByTestId('new-task');
    expect(inputId).toBeInTheDocument();
  });
  
  test('it should pass a text to input value', () => {
    render(<List />)
  
    const inputId = screen.getByTestId('new-task');
    fireEvent.change(inputId, {target: {value: 'task1'}});
    expect(inputId).toHaveValue('task1');
  });
  
  test('it should create a new TODO task', () => {
    render(<List />)
  
    const inputId = screen.getByTestId('new-task');
    const addBtn = screen.getByTestId('add-task-btn');
  
    fireEvent.change(inputId, {target: {value: 'task1'}});
    
    expect(inputId).toHaveValue('task1');
    expect(addBtn).toBeInTheDocument();
  
    fireEvent.click(addBtn)
    expect(screen.getByTestId('task-list')).toBeInTheDocument();
  })
  
  test('it should conclude a single Task', () => {
    render(
    <TodoProvider>
      <List />
    </TodoProvider>
    )
  
    const inputId = screen.getByTestId('new-task');
    const addBtn = screen.getByTestId('add-task-btn');
  
    fireEvent.change(inputId, {target: {value: 'task1'}});
    
    expect(inputId).toHaveValue('task1');
    expect(addBtn).toBeInTheDocument();
  
    fireEvent.click(addBtn);
    
    const listItem = screen.getByTestId('li-item');
    const taskText = screen.getByTestId("task-text");
    
    expect(taskText).toBeInTheDocument();
    fireEvent.click(listItem);

    const completeTaskBtn = screen.getByTestId("complete-btn");
    fireEvent.click(completeTaskBtn);    
  });

  test('it should exclude a single Task', () => {
    render(
    <TodoProvider>
      <List />
    </TodoProvider>
    )
  
    const inputId = screen.getByTestId('new-task');
    const addBtn = screen.getByTestId('add-task-btn');
  
    fireEvent.change(inputId, {target: {value: 'task1'}});
    
    expect(inputId).toHaveValue('task1');
    expect(addBtn).toBeInTheDocument();
  
    fireEvent.click(addBtn);
    
    const listItem = screen.getByTestId('li-item');
    const taskText = screen.getByTestId("task-text");
    
    expect(taskText).toBeInTheDocument();
    fireEvent.click(listItem);

    const completeTaskBtn = screen.getByTestId("remove-btn");
    fireEvent.click(completeTaskBtn);
  });

})