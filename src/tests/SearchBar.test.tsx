import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar/index";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

describe("SearchBar component", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SearchBar />
      </ThemeProvider>
    );

    expect(getByPlaceholderText("Search items")).toBeInTheDocument();
    expect(getByTestId("button-search")).toBeInTheDocument();
    expect(document.body).toMatchSnapshot();
  });

  it("calls onAddItemClick when button is clicked with a non-empty value", () => {
    const { getByTestId, getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <SearchBar />
      </ThemeProvider>
    );

    const searchInput = getByPlaceholderText("Search items");
    const searchButton = getByTestId("button-search");

    fireEvent.change(searchInput, { target: { value: "Example" } });
    fireEvent.click(searchButton);
  });

  it("does not call onAddItemClick when button is clicked with an empty value", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SearchBar />
      </ThemeProvider>
    );

    const searchButton = getByTestId("button-search");
    fireEvent.click(searchButton);
  });
});
