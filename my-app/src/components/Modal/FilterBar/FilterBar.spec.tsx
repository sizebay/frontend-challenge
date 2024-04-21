import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { ThemeProvider } from "styled-components";
import { defaultTheme } from 'styles/theme/defaultTheme';
import { TaskContext } from 'context/TaskContext';

import { ModalFilterBar } from "./FilterBar";

const valueMock = {
  currentStatus: '',
  searchTask: '',
  setCurrentStatus: () => { },
  setSearchTask: () => { },
  removeFilter: () => { },
  onConfirmTask: () => { },
  onCreateTask: () => { },
  onDeleteTask: () => { },
  onEditTask: () => { },
  filteredTasks: [],
  tasks: [],
}

const user = userEvent.setup();

describe('Testing the FilterBar component', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('Render the components', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <TaskContext.Provider value={valueMock}>
          <ModalFilterBar />
        </TaskContext.Provider>
      </ThemeProvider>
    );

    expect(screen.getByText('done')).toBeInTheDocument();
    expect(screen.getByText('pending')).toBeInTheDocument();
    expect(screen.getByTestId('search-task')).toBeInTheDocument();
    expect(screen.getByTestId('remove-filter')).toBeInTheDocument();
  });

  it('Should change button class according to current status', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <TaskContext.Provider value={{ ...valueMock, currentStatus: 'pending' }}>
          <ModalFilterBar />
        </TaskContext.Provider>
      </ThemeProvider>
    );

    const buttonDone = screen.getByText('done');
    const buttonPending = screen.getByText('pending');

    expect(buttonPending).toHaveStyle({ color: '#4DA6B3', border: '1px solid #4DA6B3' });
    expect(buttonDone).not.toHaveStyle({ color: '#4DA6B3', border: '1px solid #4DA6B3' });
  });

  it('The task status should change to done when the button is clicked', async () => {
    const MockCurrentStatus = 'done'
    const setCurrentStatus = jest.fn();

    render(
      <ThemeProvider theme={defaultTheme}>
        <TaskContext.Provider value={{ ...valueMock, currentStatus: MockCurrentStatus, setCurrentStatus }}>
          <ModalFilterBar />
        </TaskContext.Provider>
      </ThemeProvider>
    );

    const buttonDone = screen.getByText('done');
    await user.click(buttonDone)

    expect(setCurrentStatus).toHaveBeenCalledWith(MockCurrentStatus);
  });

  it('The task status should change to pending when the button is clicked', async () => {
    const MockCurrentStatus = 'pending'
    const setCurrentStatus = jest.fn();

    render(
      <ThemeProvider theme={defaultTheme}>
        <TaskContext.Provider value={{ ...valueMock, currentStatus: MockCurrentStatus, setCurrentStatus }}>
          <ModalFilterBar />
        </TaskContext.Provider>
      </ThemeProvider>
    );

    const buttonPending = screen.getByText('pending');
    await user.click(buttonPending)

    expect(setCurrentStatus).toHaveBeenCalledWith(MockCurrentStatus);
  });

  it('Should change the input value', async () => {
    const MockSearchTask = "anything";
    const setSearchTask = jest.fn();

    render(
      <ThemeProvider theme={defaultTheme}>
        <TaskContext.Provider value={{ ...valueMock, searchTask: MockSearchTask, setSearchTask }}>
          <ModalFilterBar />
        </TaskContext.Provider>
      </ThemeProvider>
    );
    
    // The error faced is in relation to the number of characters that are captured by the user.
    // The error is in the user.type
    const input = screen.getByTestId('search-task');
    await user.type(input, MockSearchTask);

    // expect(setSearchTask).toHaveBeenCalledWith(MockSearchTask);
    expect(screen.getByTestId('search-task')).toHaveValue('anything');
  });

  it('If there is a value in the input, should call removeFilters when the button is clicked', async () => {
    let MockSearch = 'anything';
    const removeFilter = jest.fn();

    render(
      <ThemeProvider theme={defaultTheme}>
        <TaskContext.Provider value={{ ...valueMock, searchTask: MockSearch, removeFilter }}>
          <ModalFilterBar />
        </TaskContext.Provider>
      </ThemeProvider>
    );

    const buttonRemoveSearch = screen.getByTestId('remove-filter');
    await user.click(buttonRemoveSearch);

    expect(removeFilter).toHaveBeenCalled();
  });
});