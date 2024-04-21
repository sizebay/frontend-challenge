import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { ModalNewTask } from './NewTask'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'styles/theme/defaultTheme'
import { TaskContext } from 'context/TaskContext'
import { toast } from 'sonner'

jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

const MockOnCreateTask = jest.fn();

const valueMock = {
  currentStatus: '',
  searchTask: '',
  setCurrentStatus: () => { },
  setSearchTask: () => { },
  removeFilter: () => { },
  onConfirmTask: () => { },
  onCreateTask: MockOnCreateTask,
  onDeleteTask: () => { },
  onEditTask: () => { },
  filteredTasks: [],
  tasks: [],
}

const RenderAPP = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TaskContext.Provider value={valueMock}>
        <ModalNewTask />
      </TaskContext.Provider>
    </ThemeProvider>
  )
}

const user = userEvent.setup();

describe('Testing NewTask component', () => {

  it('Render ModalNewTask component', () => {
    render(<RenderAPP />)

    const inputText = screen.getByTestId('new-task-title');
    const createTaskButton = screen.getByTestId('create-task-btn');

    expect(inputText).toBeInTheDocument();
    expect(createTaskButton).toBeInTheDocument();
  });

  it('The button should be disabled when the content is empty', () => {
    render(<RenderAPP />);

    const createTaskButton = screen.getByTestId('create-task-btn');
    expect(createTaskButton).toBeDisabled();
  });

  it('Should call handleCreateTask when button is clicked', async () => {
    render(<RenderAPP />);

    const inputText = screen.getByTestId('new-task-title');
    await user.type(inputText, 'newTaskTitle');

    const createTaskButton = screen.getByTestId('create-task-btn');
    await user.click(createTaskButton);

    expect(MockOnCreateTask).toHaveBeenCalledWith('newTaskTitle');
    expect(toast.success).toHaveBeenCalledWith('Tarefa criada com sucesso!');
    expect(inputText).toHaveValue('');
  });
});

