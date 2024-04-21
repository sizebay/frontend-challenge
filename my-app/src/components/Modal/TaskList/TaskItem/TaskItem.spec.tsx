import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { TaskItem } from './TaskItem'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'styles/theme/defaultTheme'
import { TaskContext } from 'context/TaskContext'
import { toast } from 'sonner'

const MockOnConfirmTask = jest.fn();
const MockOnDeleteTask = jest.fn();
const MockOnEditTask = jest.fn();

const valueMock = {
  currentStatus: '',
  searchTask: '',
  setCurrentStatus: () => { },
  setSearchTask: () => { },
  removeFilter: () => { },
  onCreateTask: () => { },
  onConfirmTask: MockOnConfirmTask,
  onDeleteTask: MockOnDeleteTask,
  onEditTask: MockOnEditTask,
  filteredTasks: [],
  tasks: [],
}

const RenderAPP = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TaskContext.Provider value={valueMock}>
        <TaskItem task={taskMock} />
      </TaskContext.Provider>
    </ThemeProvider>
  )
}

jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

const taskMock = {
  id: '1',
  title: 'tasktest',
  status: 'pending',
}

describe('Test Task Item component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const user = userEvent.setup();

  it('Render task item', () => {
    render(<RenderAPP />)

    expect(screen.getByDisplayValue(taskMock.title)).toBeInTheDocument();
  })

  it('Should call onDeleteTask when the user clicks the delete button', async () => {
    render(
      <RenderAPP />
    )

    const handleInput = screen.getByDisplayValue(taskMock.title);
    await user.click(handleInput);

    const deleteTaskButton = screen.getByTestId('delete-task-button');
    expect(deleteTaskButton).toBeVisible();

    await user.click(deleteTaskButton);

    expect(MockOnDeleteTask).toHaveBeenCalledWith(taskMock.id);
    expect(toast.success).toHaveBeenCalledWith('Tarefa removida!');
    expect(deleteTaskButton).not.toBeVisible();
  });

  it('Should call onConfirmTask when the user clicks the confirm button', async () => {
    render(<RenderAPP />)

    const handleInput = screen.getByDisplayValue(taskMock.title);
    await user.click(handleInput);

    const confirmTaskButton = screen.getByTestId('confirm-task-button');
    expect(confirmTaskButton).toBeVisible();

    await user.click(confirmTaskButton);

    expect(MockOnConfirmTask).toHaveBeenCalledWith(taskMock.id);
    expect(toast.success).toHaveBeenCalledWith('Tarefa concluída!');
    expect(confirmTaskButton).not.toBeVisible();
  });

  it('Should call onEditTask when the user clicks the tooltip', async () => {
    render(<RenderAPP />)

    const handleInput = screen.getByDisplayValue(taskMock.title);
    await user.click(handleInput);

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeVisible();

    await user.click(tooltip);

    expect(MockOnEditTask).toHaveBeenCalledWith(taskMock.id, taskMock.title);
    expect(toast.success).toHaveBeenCalledWith('Tarefa editada!');
    expect(tooltip).not.toBeVisible();
  });
});

