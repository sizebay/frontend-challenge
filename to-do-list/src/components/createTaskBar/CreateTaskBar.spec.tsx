import { fireEvent, render, screen  } from '@testing-library/react'
import CreateTaskBar from '.';
import { TaskContextProvider } from '../../services/taskServices/TaskContext';
import { useTaskContext } from '../../services/taskServices/UseTaskContext';

describe('createTaskBar', () => {

  test('should create a new task with valid input', () => {
    render(
        <TaskContextProvider>
          <CreateTaskBar/>
        </TaskContextProvider>
    );
    const { setTaskData } = useTaskContext()
    const inputField = screen.getByPlaceholderText('Add new item…');
    fireEvent.change(inputField, { target: { value: 'New Task' } });
    const button = screen.getByTestId('create-task-button');
    fireEvent.click(button);
    expect(setTaskData).toHaveBeenCalledWith(expect.arrayContaining([
      expect.objectContaining({
        text: 'New Task',
        isDone: false
      })
    ]));
  });

  test('should not create or add task to the task list when user enters empty input and clicks create task button', () => {
    render(
      <TaskContextProvider>
        <CreateTaskBar />
      </TaskContextProvider>
    );
    const button = screen.getByRole('button');

    fireEvent.click(button);

    const tasks = screen.queryAllByTestId('task');
    expect(tasks).toHaveLength(0);
  });
})

