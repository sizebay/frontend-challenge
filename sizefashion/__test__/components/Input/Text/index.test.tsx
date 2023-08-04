import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TextInput from '@components/Input/Text';
import { useItems } from '@context/Items';

jest.mock('../../../../app/context/Items', () => ({
  useItems: jest.fn(),
}));

describe('TextInput component', () => {

  const mockApplyFilter = jest.fn();
  const expectOptions = { target: { value: 'sizebay' } }

  beforeEach(() => {
    (useItems as jest.Mock).mockReturnValue({
      applyFilter: mockApplyFilter,
    });
  });

  it('Should render properly', () => {
    render(<TextInput />);

    const input = screen.getByTestId('textinput')

    expect(input).toBeInTheDocument();
  });

  it('Should update searchText state on input change', () => {
    render(<TextInput />);

    const input = screen.getByTestId('textinput')

    fireEvent.change(input, expectOptions);

    expect(input.value).toBe('sizebay');
  });

  it('Should call applyFilter with the correct value on input change', () => {
    render(<TextInput />);

    const input = screen.getByTestId('textinput')

    fireEvent.change(input, expectOptions);

    expect(mockApplyFilter).toHaveBeenCalledWith('sizebay');
  });
});