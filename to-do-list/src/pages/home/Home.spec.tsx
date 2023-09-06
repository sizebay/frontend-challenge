import { render, screen } from "@testing-library/react";
import Home from "../home/index";
import { TaskContextProvider } from "../../services/taskServices/TaskContext";


describe('home', ()=> {

  test('should render the search bar and filter buttons', () => {
    render(
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    );

    const searchBar = screen.getByPlaceholderText('Search items');
    const doneFilterButton = screen.getByText('Done');
    const pendingFilterButton = screen.getByText('Pending');

    expect(searchBar).toBeInTheDocument();
    expect(doneFilterButton).toBeInTheDocument();
    expect(pendingFilterButton).toBeInTheDocument();
  }); 
})