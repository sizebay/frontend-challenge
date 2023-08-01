import './index.css';
import App from './App';

import { createRoot } from 'react-dom/client';
import { FilterProvider } from './context/filter_context';
import { ProductsProvider } from './context/products_context';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>
);