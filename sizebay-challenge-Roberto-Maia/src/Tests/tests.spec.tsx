import { render, screen } from "@testing-library/react";
import { SearchBar } from "../components/SearchBar/SearchBar";

describe("Component SearchBar", () => {
  it("should render correctly", () => {
    const setTaskFilterMock = jest.fn();
    const setDirectionRenderMock = jest.fn();

    render(
      <SearchBar
        setTaskFilter={setTaskFilterMock}
        taskRender={[{ id: 0, task: "", done: false }]}
        setDirectionRender={setDirectionRenderMock}
      />
    );

    expect(screen.getByText("Done")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });
});
