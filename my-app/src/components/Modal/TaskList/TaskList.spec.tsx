import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ModalTaskList } from './TaskList'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'styles/theme/defaultTheme'
import { TaskContext } from 'context/TaskContext'

const mockTasks = [
  { id: '1', title: 'task-title-1', status: 'pending' },
  { id: '2', title: 'task-title-2', status: 'done' }
]

const empty: [] = []

const valuesMock = {
  currentStatus: '',
  searchTask: '',
  setCurrentStatus: () => {},
  setSearchTask: () => {},
  removeFilter: () => {},
  onConfirmTask: () => {},
  onCreateTask: () => {},
  onDeleteTask: () => {},
  onEditTask: () => {},
  filteredTasks: [],
  tasks: [],
}

describe('Testing TaskList component', () => {

  it('Render tasks when there are tasks', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <TaskContext.Provider value={{ ...valuesMock, currentStatus: '', searchTask: '', filteredTasks: mockTasks }}>
          <ModalTaskList />
        </TaskContext.Provider>
      </ThemeProvider>
    );

    mockTasks.forEach(task => {
      expect(screen.getByDisplayValue(task.title));
    });
    expect(screen.getByTestId('task-list')).toBeInTheDocument();
  });

  it('Render the NoResult component when there are no tasks to search', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <TaskContext.Provider value={{ ...valuesMock, searchTask: 'anything', filteredTasks: empty }}>
          <ModalTaskList />
        </TaskContext.Provider>
      </ThemeProvider>
    );

    expect(screen.getByTestId('no-results-search')).toBeInTheDocument();
  });

  it('Render the NoResult component when there are no tasks for the pending filter', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <TaskContext.Provider value={{ ...valuesMock, currentStatus: 'pending', filteredTasks: empty }}>
          <ModalTaskList />
        </TaskContext.Provider>
      </ThemeProvider>
    );

    expect(screen.getByTestId('no-results-pending')).toBeInTheDocument();
  });

  it('Render the NoResult component when there are no tasks for the done filter', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <TaskContext.Provider value={{ ...valuesMock, currentStatus: 'done', filteredTasks: empty }}>
          <ModalTaskList />
        </TaskContext.Provider>
      </ThemeProvider>
    );

    expect(screen.getByTestId('no-results-done')).toBeInTheDocument();
  });
});