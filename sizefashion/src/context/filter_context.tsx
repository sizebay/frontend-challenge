import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  LOAD_PRODUCTS,
  FILTER_PRODUCTS,
} from '../actions'

import { productDataType } from '../utils/productData'
import { useProductsContext } from './products_context'

type filtersType = {
  searchTerm: string
  category: string
  vendor: string
}

export const defaultFilters: filtersType = {
  searchTerm: '',
  category: 'all',
  vendor: 'all'
}

export type initialStateType = {
  filteredProducts: productDataType[]
  allProducts: productDataType[]
  filters: filtersType
  updateFilters: (e: any) => void
  clearFilters: () => void
}

const initialState: initialStateType = {
  filteredProducts: [],
  allProducts: [],
  filters: defaultFilters,
  updateFilters: () => {},
  clearFilters: () => {},
}


type Props = {
  children?: React.ReactNode
};

export const FilterContext = React.createContext<initialStateType>(initialState)

export const FilterProvider: React.FC<Props> = ({ children }) => {
  const { allProducts } = useProductsContext()
  
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: allProducts })
  }, [allProducts])

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
  }, [allProducts, state.filters])


  const updateFilters = (e: any) => {

    let name = e.target.name
    let value = e.target.value

    if (name === 'category' || name === 'vendor') {
      value = e.target.textContent
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
