import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '.';

describe('Button component', () => {
  test('renders children correctly', () => {
    const { getByText } = render(<Button>Click me</Button>);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );
    const buttonElement = getByText('Click me');

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('passes other props to the underlying ButtonUI component', () => {
    const { getByText } = render(<Button isDisabled>Disabled Button</Button>);
    const buttonElement = getByText('Disabled Button');

    expect(buttonElement).toBeDisabled();
  });
});
