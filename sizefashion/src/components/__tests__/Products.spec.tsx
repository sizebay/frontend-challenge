import { screen, fireEvent, waitFor, act } from '@testing-library/react';
import { ReactElement } from 'react';
import ProductList from '../ProductList';
import { FilterContext } from '../../context/filterContext';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import { ProductDataType } from '../../utils/productData';
import { createMemoryHistory } from 'history';
import Product from '../Product';
import SingleProductPage from '../../pages/SingleProductPage/SingleProductPage';
import { createRoot } from 'react-dom/client';


const filteredProducts = [
  {
    id: '1',
    category: 'female',
    image: "",
    title: "Nylon Bomber Jacket in Stone",
    vendor: "7 FOR ALL MANKIND"
  },
]


const allProducts = filteredProducts

const clearFilters = () => {
  return ''
}
const updateFilters = () => {
  return ''
}


const loadRootElement = () => {
  const rootElement = document.createElement('div');
  return document.body.appendChild(rootElement);
}

const renderWithContext = ( component:ReactElement, filteredProducts: ProductDataType[] ) => {
  
  const rootElement = loadRootElement()

  let root;
  act(() => {
    root = createRoot(rootElement);
    root.render(
      <BrowserRouter>
        <FilterContext.Provider
          value={{
            filteredProducts,
            allProducts,
            clearFilters,
            updateFilters,
            filters: { category: '', searchTerm: '', vendor: '' }
          }}
        >
          <MemoryRouter>
            {component}
          </MemoryRouter>
        </FilterContext.Provider>
      </BrowserRouter>
    );
  });
  return {
    getAllByTestId: (testId: string) => rootElement.querySelectorAll(`[data-testid="${testId}"]`)
  };
}


describe('Products component', () => {
  it('should load a list of products', async () => {
    const { getAllByTestId } = renderWithContext(<ProductList />, filteredProducts)
    
    await waitFor(() => {
      expect(getAllByTestId('product').length).toBeGreaterThanOrEqual(1);
    });
  });

  it("should show text when no products are found", async () => {
    renderWithContext(<ProductList />, [])
    
    await waitFor(() => {
      expect(screen.getByText('desculpe', {exact: false})).toBeInTheDocument();
    });
    
  });

  it('should redirect to full product page on click', async () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });

    
    const rootElement = loadRootElement()

    let root;
    act(() => {
      root = createRoot(rootElement);
      root.render(
        <Router history={history}>
          <Product product={{
            id: '2',
            category: 'male',
            image: "",
            title: "Nylon Bomber Jacket in Stone",
            vendor: "7 FOR ALL MANKIND"
          }} />
        </Router>
      );
    });

    expect(history.location.pathname).toBe('/');

    await act(async () => {
      const linkToProduct = rootElement.querySelector('[data-testid="link-to-product"]')!;
      fireEvent.click(linkToProduct);

      expect(history.location.pathname).toBe('/products/2');
    });
  });

  it('should redirect to products page from single product page', async () => {
    const history = createMemoryHistory({ initialEntries: ['/products/2'] });

    
    const rootElement = loadRootElement()

    let root;
    act(() => {
      root = createRoot(rootElement);
      root.render(
        <Router history={history}>
          <SingleProductPage />
        </Router>
      );
    });

    expect(history.location.pathname).toBe('/products/2');

    await act(async () => {
      const backToProducts = rootElement.querySelector('[data-testid="back-to-products"]')!;
      fireEvent.click(backToProducts);

      expect(history.location.pathname).toBe('/');
    });
  });
});
