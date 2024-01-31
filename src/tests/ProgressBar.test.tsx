import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from '../components/ProgressBar/index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import '@testing-library/jest-dom';

describe('ProgressBar component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ProgressBar completedItems={0} totalTasks={10} />
      </ThemeProvider>
    );

    const progressFill = getByTestId('progress-fill');

    expect(progressFill).toHaveStyle('width: 0%');
    expect(document.body).toMatchSnapshot();
  });

  it('renders correctly with completed items', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ProgressBar completedItems={5} totalTasks={10} />
      </ThemeProvider>
    );

    const progressFill = getByTestId('progress-fill');

    expect(progressFill).toHaveStyle('width: 50%');
  });

  it('renders as completed when all items are completed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ProgressBar completedItems={10} totalTasks={10} />
      </ThemeProvider>
    );

    const progressFill = getByTestId('progress-fill');

    expect(progressFill).toHaveStyle('width: 100%');
  });
});
