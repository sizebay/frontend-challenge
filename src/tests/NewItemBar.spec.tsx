import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewItemBar from '../components/NewItemBar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const onAddItemClickMock = jest.fn();

const renderComponent = () => {
  return render(
    <ThemeProvider theme={theme}>
      <NewItemBar onAddItemClick={onAddItemClickMock} />
    </ThemeProvider>
  );
};

describe('NewItemBar Component', () => {
  it('should render the component correctly', () => {
    const { getByPlaceholderText, getByTestId } = renderComponent();

    expect(getByPlaceholderText('Add new item...')).toBeInTheDocument();
    expect(getByTestId('search-button')).toBeInTheDocument();
  });

  it('should not call onAddItemClick when form is submitted with an empty item', async () => {
    const { getByTestId } = renderComponent();
    fireEvent.submit(getByTestId('new-item-input'));

    expect(onAddItemClickMock).not.toHaveBeenCalled();
  });

  it('should call onAddItemClick when form is submitted with a non-empty item', async () => {
    const { getByTestId } = renderComponent();
    fireEvent.change(getByTestId('new-item-input'), { target: { value: 'New Item' } });
    await waitFor(() => {
      fireEvent.submit(getByTestId('new-item-input'));
    });

    expect(onAddItemClickMock).toHaveBeenCalledWith('New Item');
  });

  it('should not call onAddItemClick when form is submitted with an empty item', async () => {
    const { getByTestId } = renderComponent();
    await waitFor(() => {
      fireEvent.submit(getByTestId('new-item-input'));
    });

    expect(onAddItemClickMock).not.toHaveBeenCalled();
  });
});
