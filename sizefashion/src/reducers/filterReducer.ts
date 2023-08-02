import {
  LOAD_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { initialStateType } from '../context/filterContext'
import { ProductDataType } from '../utils/productData';

type PayloadType = {
  name: string,
  value: string
}

type ActionProps = | 
{ type: 'LOAD_PRODUCTS', payload: ProductDataType[] }
| { type: 'UPDATE_FILTERS', payload: PayloadType}
| { type: 'FILTER_PRODUCTS' }
| { type: 'CLEAR_FILTERS' }

const filterReducer = ( state: initialStateType, action:ActionProps ) => {
  
  switch(action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: { ...state.filters },
      }
    case UPDATE_FILTERS:
      
      const { name, value } = action.payload
      return { ...state, filters: { ...state.filters, [name]: value } }
    case FILTER_PRODUCTS:
      const { allProducts } = state
      const {
        searchTerm,
        category,
        vendor,
      } = state.filters
  
      let tempProducts = [...allProducts]
      
      if (searchTerm) {
        tempProducts = tempProducts.filter(product => {
          return (
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        })
      }
      // category
      if (category !== 'all') {
        tempProducts = tempProducts.filter(product => {
          return product.category === category
        })
      }
  
      if (vendor !== 'all') {
        tempProducts = tempProducts.filter(product => {
          return product.vendor === vendor
        })
      }
  
      return { ...state, filteredProducts: tempProducts }
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          searchTerm: '',
          category: 'all',
          vendor: 'all',
          
        },
      }
    default:
      return state
  }
}

export default filterReducer
