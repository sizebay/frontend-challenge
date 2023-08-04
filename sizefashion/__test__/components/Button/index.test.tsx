import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from '@components/Button';

describe('Button component', () => {

  const mockOnClick = jest.fn();
  let props: ButtonProps = {
    title: 'Test',
    onClick: mockOnClick,
  };

  it('Should render with default styles when not active', () => {

    render(<Button {...props} />);

    const button = screen.getByTestId('button');

    expect(button).toHaveClass('px-4 py-0.5');
    expect(button).not.toHaveClass('bg-gray-700 text-white');
  });

  it('Should render with active styles when active', () => {

    props = {
      ...props,
      active: true,
    };

    render(<Button {...props} />);

    const button = screen.getByTestId('button');

    expect(button).toHaveClass('px-4 py-0.5 bg-gray-700 text-white');
  });

  it('Should call onClick function when clicked', () => {

    props = {
      title: 'Test',
      onClick: mockOnClick,
    };

    render(<Button {...props} />);

    const button = screen.getByTestId('button');

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('Should capitalize the title', () => {
    
    props = {
      title: 'test button',
      onClick: mockOnClick,
    };

    render(<Button {...props} />);

    const button = screen.getByTestId('button');

    expect(button.textContent).toBe('Test Button');
  });
});