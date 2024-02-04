import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../components/SearchBar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const onSearchMock = jest.fn();

const renderComponent = () => {
  return render(
    <ThemeProvider theme={theme}>
      <SearchBar onSearch={onSearchMock} />
    </ThemeProvider>
  );
};

describe('SearchBar Component', () => {
  it('should render the component correctly', () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('search-input')).toBeInTheDocument();
    expect(getByTestId('button-search')).toBeInTheDocument();
  });

  it('should call onSearch when input value changes', () => {
    const { getByTestId } = renderComponent();

    fireEvent.change(getByTestId('search-input'), { target: { value: 'New Search Term' } });

    expect(onSearchMock).toHaveBeenCalledWith('New Search Term');
  });
});
