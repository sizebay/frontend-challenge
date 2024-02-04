import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateTimeDisplay from '../components/DateTimeDisplay';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

describe('DateTimeDisplay Component', () => {
  it('should render the date components correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <DateTimeDisplay />
      </ThemeProvider>
    );

    expect(getByText(/^(0[1-9]|[12][0-9]|3[01])$/)).toBeInTheDocument();
    expect(getByText(/^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)$/)).toBeInTheDocument();
    expect(getByText(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/)).toBeInTheDocument();
    expect(getByText(/^\d{4}$/)).toBeInTheDocument();
  });
});

  