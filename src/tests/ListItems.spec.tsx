import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListItems from '../components/ListItems';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const mockItems = [
  { id: 1, content: 'Task 1', completed: false },
  { id: 2, content: 'Task 2', completed: false },
  { id: 3, content: 'Completed Task 1', completed: true },
  { id: 4, content: 'Completed Task 2', completed: true },
];

const mockCompletedItems = [
  { id: 3, content: 'Completed Task 1', completed: true },
  { id: 4, content: 'Completed Task 2', completed: true },
];

const mockPendingItems = [
  { id: 1, content: 'Task 1', completed: false },
  { id: 2, content: 'Task 2', completed: false },
];

const onDeleteItemMock = jest.fn();
const onCheckClickMock = jest.fn();

const renderComponent = (props = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <ListItems
        items={mockItems}
        completedItems={mockCompletedItems}
        pendingItems={mockPendingItems}
        onDeleteItem={onDeleteItemMock}
        onCheckClick={onCheckClickMock}
        selectedButton="all"
        searchTerm=""
        {...props}
      />
    </ThemeProvider>
  );
};

describe('ListItems Component', () => {
  it('should render the component correctly', () => {
    const { getByText } = renderComponent();

    expect(getByText('Task 1')).toBeInTheDocument();
    expect(getByText('Task 2')).toBeInTheDocument();
    expect(getByText('Completed Task 1')).toBeInTheDocument();
    expect(getByText('Completed Task 2')).toBeInTheDocument();
  });

  it('should display pending items when selectedButton is "pending"', () => {
    const { getByText } = renderComponent({ selectedButton: 'pending' });

    expect(getByText('Task 1')).toBeInTheDocument();
    expect(getByText('Task 2')).toBeInTheDocument();
  });

  it('should display completed items when selectedButton is "done"', () => {
    const { getByText } = renderComponent({ selectedButton: 'done' });

    expect(getByText('Completed Task 1')).toBeInTheDocument();
    expect(getByText('Completed Task 2')).toBeInTheDocument();
  });
});
