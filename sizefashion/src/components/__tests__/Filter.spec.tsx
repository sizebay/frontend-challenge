import { fireEvent, waitFor, act } from '@testing-library/react';
import Filters from '../Filters/Filters';
import { VendorFilters } from '../Filters/VendorFilters';
import { FilterContext } from '../../context/filterContext';
import { ReactElement } from 'react';
import { CategoryFilters } from '../Filters/CategoryFilters';
import { SearchFilters } from '../Filters/SearchFilters';
import { createRoot } from 'react-dom/client';

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
  const rootElement = document.createElement('div');
  document.body.appendChild(rootElement);

  let root;
  act(() => {
    root = createRoot(rootElement);
    root.render(
      <FilterContext.Provider
        value={{
          allProducts,
          clearFilters,
          updateFilters,
          filteredProducts,
          filters: { category: '', searchTerm: '', vendor: '' }
        }}
      >
        {component}
      </FilterContext.Provider>
    );
  });

  return {
    getAllByTestId: (testId: string) => rootElement.querySelectorAll(`[data-testid="${testId}"]`)
  };
}

const loadRootElement = (component:ReactElement) => {
  const rootElement = document.createElement('div');
  document.body.appendChild(rootElement);

  let root;
  act(() => {
    root = createRoot(rootElement);
    root.render(component);
  });

  return { rootElement, root };
}

describe('Filters component', () => {
  it('should render', () => {
    const { rootElement } = loadRootElement(<Filters />);

    expect(rootElement.textContent).toContain('Filtros');
    expect(rootElement.querySelector('[data-testid="search-input"]')).toBeInTheDocument();
    expect(rootElement.textContent).toContain('Limpar Filtros');
    });

  it('should clear filters when button is clicked', () => {
    
    const { rootElement } = loadRootElement(<Filters />);

    const button = rootElement.querySelector('[data-testid="clear-btn"]')!;
    const category = rootElement.querySelector('[data-testid="category"]');
    const vendor = rootElement.querySelector('[data-testid="vendor"]');

    act(() => {
      fireEvent.click(button);
    });

    expect(category).toHaveClass("border-b-2");
    expect(category).toHaveTextContent("all");
    expect(vendor).toHaveClass("border-b-2");
    expect(vendor).toHaveTextContent("all");
    });

  it("should load the vendor component", async () => {
    
    const { rootElement } = loadRootElement(<Filters />);

    expect(rootElement.textContent).toContain('Marcas');
    
  });

  it("should have class on active vendor", () => {
    const { rootElement } = loadRootElement(<VendorFilters />);

    const button = rootElement.querySelector('button')!;

    act(() => {
      fireEvent.click(button);
    });
    expect(button).toHaveClass('border-b-2');
  });

  it("should load the category component", async () => {
    
    const { rootElement } = loadRootElement(<CategoryFilters />);

    expect(rootElement.textContent).toContain('Categorias');
    
  });

  it("should have class on active category", () => {
    
    const { rootElement } = loadRootElement(<CategoryFilters />);
    const button = rootElement.querySelector('button')!; // Find the appropriate button element

    act(() => {
      fireEvent.click(button);
    });

    expect(button).toHaveClass('border-b-2');

    
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
    
    const { rootElement } = loadRootElement(<SearchFilters />);
    const searchInput = rootElement.querySelector('[data-testid="search-input"]');

    expect(searchInput).toBeInTheDocument();
    
  });
});