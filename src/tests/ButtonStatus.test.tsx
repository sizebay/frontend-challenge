import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import { theme } from "../styles/theme";
import ButtonStatus from "../components/ButtonStatus/index";

describe("ButtonStatus component", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonStatus
          isSelected={false}
          onClick={() => {}}
          icon={<div>Icon</div>}
          label="Click me"
        />
      </ThemeProvider>
    );

    expect(getByText("Click me"));
    expect(getByText("Icon"));
    expect(document.body).toMatchSnapshot();
  });

  it("calls onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonStatus
          isSelected={false}
          onClick={onClickMock}
          icon={<div>Icon</div>}
          label="Click me"
        />
      </ThemeProvider>
    );

    fireEvent.click(getByText("Click me"));

    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(document.body).toMatchSnapshot();
  });
});
