import { fireEvent, render, screen } from '@testing-library/react';
import Filter from '../../../Components/Filter';
import '@testing-library/jest-dom'
import { TodoProvider } from '../../../Provider/Todo';
import List from '../../../Components/List';

describe('Filter component testing', () => {
  
  test('it should check if Filter Component is on screen', () => {
    render(<Filter />);
  
    const filterBtnDone = screen.getByTestId('filter-done-btn');
    const filterBtnPending = screen.getByTestId('filter-pending-btn');
    const filterInput = screen.getByTestId('filter-input');
  
    expect(filterBtnDone).toBeInTheDocument();
    expect(filterBtnPending).toBeInTheDocument();
    expect(filterInput).toBeInTheDocument();
  });
  
  test('it should be able click filter Done button', () => {
    render(
      <TodoProvider>
        <Filter />
        <List />
      </TodoProvider>
    );

    const filterBtnDone = screen.getByTestId('filter-done-btn');
    expect(filterBtnDone).toBeInTheDocument();

    fireEvent.click(filterBtnDone)

    expect(screen.getByTestId('text-filter')).toHaveTextContent('There are no items marked as Done');
  })
  
  test('it should be able click filter Pending button', () => {
    render(
      <TodoProvider>
        <Filter />
        <List />
      </TodoProvider>
    );

    const filterBtnPending = screen.getByTestId('filter-pending-btn');
    expect(filterBtnPending).toBeInTheDocument();

    fireEvent.click(filterBtnPending);

    expect(screen.getByTestId('text-filter')).toHaveTextContent('There are no items marked as Pending.');
  });

  test('it should add a new task and filter as Pending', () => {
    render(
      <TodoProvider>
        <Filter />
        <List />
      </TodoProvider>
    );

    const inputId = screen.getByTestId('new-task');
    const addBtn = screen.getByTestId('add-task-btn');
    const filterBtnPending = screen.getByTestId('filter-pending-btn');

    fireEvent.change(inputId, {target: {value: 'task1'}});
    
    expect(inputId).toHaveValue('task1');

    fireEvent.click(addBtn);
    fireEvent.click(filterBtnPending);

    const taskList = screen.getByTestId("task-list");
    expect(taskList.children.length).toBe(1);
    
  });

  test('it should add a new task and filter as Done', () => {
    render(
      <TodoProvider>
        <Filter />
        <List />
      </TodoProvider>
    );

    const inputId = screen.getByTestId('new-task');
    const addBtn = screen.getByTestId('add-task-btn');
    const filterBtnDone = screen.getByTestId('filter-done-btn');
    
    fireEvent.change(inputId, {target: {value: 'task1'}});
    
    expect(inputId).toHaveValue('task1');
    
    fireEvent.click(addBtn);
    
    const listItem = screen.getByTestId('li-item');
    const taskText = screen.getByTestId("task-text");
    
    expect(taskText).toBeInTheDocument()
    fireEvent.click(listItem)

    const completeTaskBtn = screen.getByTestId("complete-btn");
    fireEvent.click(completeTaskBtn);
    fireEvent.click(filterBtnDone);
    const taskList = screen.getByTestId("task-list");
    expect(taskList.children.length).toBe(1);
    
  })
  
});
