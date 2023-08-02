import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { ReactElement } from 'react';
import ProductList from '../ProductList';
import { FilterContext } from '../../context/filterContext';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import { ProductDataType } from '../../utils/productData';
import { createMemoryHistory } from 'history';
import Product from '../Product';
import SingleProductPage from '../../pages/SingleProductPage/SingleProductPage';

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


const renderWithContext = ( component:ReactElement, filteredProducts: ProductDataType[] ) => {
  return {
    ...render(
      <BrowserRouter>
        <FilterContext.Provider
          value={{filteredProducts, allProducts, clearFilters, updateFilters, filters: { category: '', searchTerm: '', vendor: '' }}}
        >
          <MemoryRouter>
            {component}
          </MemoryRouter>
        </FilterContext.Provider>
      </BrowserRouter>
    )
  }
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

  it('should redirect to full product page on click', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const { getByTestId } = render(
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
    expect(history.location.pathname).toBe('/');
    fireEvent.click(getByTestId('link-to-product'));
    expect(history.location.pathname).toBe('/products/Nylon Bomber Jacket in Stone');
  });

  it('should redirect to products page from single product page', () => {
    const history = createMemoryHistory({ initialEntries: ['/products/Nylon Bomber Jacket in Stone'] });
    const { getByTestId } = render(
      <Router history={history}>
        <SingleProductPage />
      </Router>
    );
    expect(history.location.pathname).toBe('/products/Nylon Bomber Jacket in Stone');
    fireEvent.click(getByTestId('back-to-products'));
    expect(history.location.pathname).toBe('/');
  });
});
