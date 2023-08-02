import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Filters from '../Filters/Filters';
import { VendorFilters } from '../Filters/VendorFilters';
import { FilterContext } from '../../context/filterContext';
import { ReactElement } from 'react';
import { CategoryFilters } from '../Filters/CategoryFilters';
import { SearchFilters } from '../Filters/SearchFilters';

const allProducts = [
  {
    id: '1',
    category: 'male',
    image: "",
    title: "Nylon Bomber Jacket in Stone",
    vendor: "7 FOR ALL MANKIND"
  },
  {
    id: '2',
    category: 'female',
    image: "",
    title: "Nylon Bomber Jacket in Stone",
    vendor: "7 FOR ALL MANKIND"
  },
  {
    id: '3',
    category: 'female',
    image: "",
    title: "Nylon Bomber Jacket in Stone",
    vendor: "7 FOR ALL MANKIND"
  },
  {
    id: '4',
    category: 'female',
    image: "",
    title: "Nylon Bomber Jacket in Stone",
    vendor: "7 FOR ALL MANKIND"
  },
  {
    id: '5',
    category: 'kids',
    image: "",
    title: "Nylon Bomber Jacket in Stone",
    vendor: "7 FOR ALL MANKIND"
  }
]

const filteredProducts = allProducts

const clearFilters = () => {
  return ''
}
const updateFilters = () => {
  return ''
}


const renderWithContext = ( component:ReactElement ) => {
  return {
    ...render(
      <FilterContext.Provider
        value={{allProducts, clearFilters, updateFilters, filteredProducts, filters: { category: '', searchTerm: '', vendor: '' }}}
      >
        {component}
      </FilterContext.Provider>
    )
  }
}


describe('Filters component', () => {
  it('should render', () => {
    render(<Filters />);
    expect(screen.queryByText('Filtros')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.queryByText('Limpar Filtros')).toBeInTheDocument();
  });

  it('should clear filters when button is clicked', () => {
    render(<Filters />);
    
    const button = screen.getByTestId("clear-btn");

    const category = screen.getByTestId('category')
    const vendor = screen.getByTestId('vendor')

    fireEvent.click(button);

    expect(category).toHaveClass("border-b-2");
    expect(category).toHaveTextContent("all");
    expect(vendor).toHaveClass("border-b-2");
    expect(vendor).toHaveTextContent("all");
  });

  it("should load the vendor component", async () => {
    render(<VendorFilters />);
    
    expect(screen.getByText("Marcas")).toBeInTheDocument();
    
  });

  it("should have class on active vendor", () => {
    render(<VendorFilters />);
    
    const button = screen.getByText("all");
    
    fireEvent.click(button);
    
    expect(button).toHaveClass("border-b-2");
  });

  it("should load the category component", async () => {
    
    render(<CategoryFilters />);
    
    expect(screen.getByText("Categorias")).toBeInTheDocument();
    
  });

  it("should have class on active category", () => {
    render(<CategoryFilters />);
    
    const button = screen.getByText("all");
    
    fireEvent.click(button);
    
    expect(button).toHaveClass("border-b-2");
  });

  it('should load the categories', async () => {
    const { getAllByTestId } = renderWithContext(<CategoryFilters />)
    
    await waitFor(() => {
      expect(getAllByTestId('category')).toHaveLength(4);
    });
  });

  it('should load at least one vendor', async () => {
    const { getAllByTestId } = renderWithContext(<VendorFilters />)
    
    await waitFor(() => {
      expect(getAllByTestId('vendor').length).toBeGreaterThanOrEqual(2);
    });
  });

  it("should load the component", async () => {
    render(<SearchFilters />);
    
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    
  });
});