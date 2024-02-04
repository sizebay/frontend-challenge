import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';

import ButtonStatus from '../components/ButtonStatus';
import { theme } from '../styles/theme';

describe('ButtonStatus', () => {
  it('should render the buttons correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonStatus isSelected={false} onClick={() => {}} icon={<div />} label="Button text" />
      </ThemeProvider>
    );

    expect(getByText('Button text')).toBeInTheDocument();
  });

  it('should call the onClick function when clicked', () => {
    const onClickMock = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonStatus isSelected={false} onClick={onClickMock} icon={<div />} label="Button text" />
      </ThemeProvider>
    );

    fireEvent.click(getByText('Button text'));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should display the icon when isSelected is true', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ButtonStatus isSelected={true} onClick={() => {}} icon={<div data-testid="icon" />} label="Teste" />
      </ThemeProvider>
    );

    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('should apply the correct styles to the buttons', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonStatus isSelected={false} onClick={() => {}} icon={<div />} label="Button text" />
      </ThemeProvider>
    );
  
    const button = getByText('Button text');
  
    expect(button).toHaveStyle(`background: ${theme.colors.background.white}`);
    expect(button).toHaveStyle(`color: ${theme.colors.tealBlue}`);
  });
});
