import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { initialStateType } from '../context/filter_context'

const filter_reducer = ( state: initialStateType, action: { type: any; payload?: any } ) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      filters: { ...state.filters },
    }
  }
  if (action.type === SET_GRID_VIEW) {
    return { ...state, gridView: true }
  }
  if (action.type === UPDATE_FILTERS) {
    let { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }
  if (action.type === FILTER_PRODUCTS) {
    const { allProducts } = state
    const {
      searchTerm,
      category,
      vendor,
      // price,
      // age: ageFilters,
      // height: heightFilters,
    } = state.filters
    let tempProducts = [...allProducts]
    // filter by searchTerm
    if (searchTerm) {
      tempProducts = tempProducts.filter(product => {
        // console.log(product)
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
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        searchTerm: '',
        category: 'all',
        vendor: 'all',
        
      },
    }
  }
  throw new Error(`ação "${action.type}" não encontrada`)
}

export default filter_reducer
