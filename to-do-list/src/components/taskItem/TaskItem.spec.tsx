import { fireEvent, render, screen } from "@testing-library/react";
import TaskItem from "../taskItem/index";
import { TaskContextProvider } from "../../services/taskServices/TaskContext";


describe('statusBar', ()=> {

  test('should render TaskItem component with the given text and id', () => {
    const text = 'Task 1';
    const id = 1;

    render(
      <TaskContextProvider>
        <TaskItem text={text} id={id} />
      </TaskContextProvider>
    );

    expect(screen.getByDisplayValue(text)).toBeInTheDocument();
    expect(screen.getByDisplayValue(text)).toHaveAttribute('data-testid', `task-item-${id}`);
  });


  test('should allow user to edit text value in input field', () => {
    const text = 'Task 1';
    const id = 1;
    const newText = 'Updated Task 1';

    render(
      <TaskContextProvider>
        <TaskItem text={text} id={id} />
      </TaskContextProvider>
    );

    const inputField = screen.getByTestId(`task-item-${id}`);
    fireEvent.change(inputField, { target: { value: newText } });

    expect(inputField).toHaveValue(newText);
  });
})
