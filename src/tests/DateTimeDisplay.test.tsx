import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import { theme } from '../styles/theme';
import DateTimeDisplay from '../components/DateTimeDisplay/index';

describe('DateTimeDisplay component', () => {
  it('renders correctly with default props', () => {
    const { queryAllByText } = render(
      <ThemeProvider theme={theme}>
        <DateTimeDisplay />
      </ThemeProvider>
    );

    const weekdayElements = queryAllByText(/^[A-Za-z]+$/);
    expect(weekdayElements.length).toBeGreaterThan(0);
  });
});
