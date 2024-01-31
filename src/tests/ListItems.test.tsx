import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import { theme } from "../styles/theme";
import ListItems from "../components/ListItems/index";

describe("ListItems component", () => {
  const onDeleteItemMock = jest.fn();
  const onCheckClickMock = jest.fn();

  const defaultProps = {
    items: [],
    completedItems: ["Completed Item 1", "Completed Item 2"],
    pendingItems: ["Pending Item 1", "Pending Item 2"],
    onDeleteItem: onDeleteItemMock,
    onCheckClick: onCheckClickMock,
    selectedButton: "done",
  };

  it("renders items correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ListItems {...defaultProps} />
      </ThemeProvider>
    );
    expect(getByText("Completed Item 1")).toBeInTheDocument();
    expect(getByText("Completed Item 2")).toBeInTheDocument();
    expect(document.body).toMatchSnapshot();
  });
  it("displays pending items when selectedButton is pending", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ListItems
          {...defaultProps}
          selectedButton="pending"
          completedItems={[]}
        />
      </ThemeProvider>
    );
    expect(getByText("Pending Item 1")).toBeInTheDocument();
    expect(getByText("Pending Item 2")).toBeInTheDocument();
  });
  it("displays completed items when selectedButton is done", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ListItems {...defaultProps} selectedButton="done" pendingItems={[]} />
      </ThemeProvider>
    );
    expect(getByText("Completed Item 1")).toBeInTheDocument();
    expect(getByText("Completed Item 2")).toBeInTheDocument();
  });
});
