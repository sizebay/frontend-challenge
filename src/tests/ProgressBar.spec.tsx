import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressBar from '../components/ProgressBar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const renderComponent = (completedItems: number, totalTasks: number) => {
  return render(
    <ThemeProvider theme={theme}>
      <ProgressBar completedItems={completedItems} totalTasks={totalTasks} />
    </ThemeProvider>
  );
};

describe('ProgressBar Component', () => {
  it('should render the component correctly', () => {
    const { getByTestId } = renderComponent(0, 10);

    expect(getByTestId('progress-bar')).toBeInTheDocument();
    expect(getByTestId('progress-fill')).toBeInTheDocument();
  });

  it('should have the correct progress width when there are completed items', () => {
    const { getByTestId } = renderComponent(5, 10);
    const progressFill = getByTestId('progress-fill');

    expect(progressFill).toHaveStyle('width: 50%');
  });

  it('should have 0% progress width when no items are completed', () => {
    const { getByTestId } = renderComponent(0, 10);
    const progressFill = getByTestId('progress-fill');

    expect(progressFill).toHaveStyle('width: 0%');
  });

  it('should have 100% progress width when all items are completed', () => {
    const { getByTestId } = renderComponent(10, 10);
    const progressFill = getByTestId('progress-fill');

    expect(progressFill).toHaveStyle('width: 100%');
  });
});
