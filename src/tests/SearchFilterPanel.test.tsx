import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import SearchFilterPanel from '../components/SearchFilterPanel';
import '@testing-library/jest-dom';
import { theme } from '../styles/theme';

describe('SearchFilterPanel component', () => {
  const addItemMock = jest.fn();
  const setSelectedButtonMock = jest.fn();

  const defaultProps = {
    addItem: addItemMock,
    selectedButton: 'done',
    setSelectedButton: setSelectedButtonMock,
    pendingItems: ['Pending Item 1', 'Pending Item 2'],
  };

  it('renders buttons correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <SearchFilterPanel {...defaultProps} />
      </ThemeProvider>
    );

    expect(getByText('Done')).toBeInTheDocument();
    expect(getByText('Pending')).toBeInTheDocument();
    expect(document.body).toMatchSnapshot();
  });
});