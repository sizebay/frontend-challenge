import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import { theme } from "../styles/theme";
import NewItemBar from "../components/NewItemBar/index";
import { act } from "react-dom/test-utils";

describe("NewItemBar component", () => {
  it("renders correctly with default props", () => {
    const { getByPlaceholderText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <NewItemBar onAddItemClick={() => {}} />
      </ThemeProvider>
    );

    expect(getByPlaceholderText("Add new item...")).toBeInTheDocument();
    expect(getByTestId("search-button")).toBeInTheDocument();
    expect(document.body).toMatchSnapshot();
  });

  it("calls onAddItemClick handler when the form is submitted with a non-empty value", async () => {
    const onAddItemClickMock = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <NewItemBar onAddItemClick={onAddItemClickMock} />
      </ThemeProvider>
    );

    const inputElement = getByPlaceholderText("Add new item...");
    const buttonElement = getByTestId("search-button");

    await act(async () => {
      fireEvent.change(inputElement, { target: { value: "New Item" } });
      fireEvent.click(buttonElement);
    });

    expect(onAddItemClickMock).toHaveBeenCalledWith("New Item");
  });

  it("does not call onAddItemClick handler when the form is submitted with an empty value", async () => {
    const onAddItemClickMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <NewItemBar onAddItemClick={onAddItemClickMock} />
      </ThemeProvider>
    );

    const buttonElement = getByTestId("search-button");

    await act(async () => {
      fireEvent.click(buttonElement);
    });

    expect(onAddItemClickMock).not.toHaveBeenCalled();
  });
});
