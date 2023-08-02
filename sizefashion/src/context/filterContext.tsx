import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filterReducer'
import {
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  LOAD_PRODUCTS,
  FILTER_PRODUCTS,
} from '../actions'

import { ProductDataType } from '../utils/productData'
import { useProducts } from './productsContext'

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
  filteredProducts: ProductDataType[]
  allProducts: ProductDataType[]
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

export function FilterProvider({children}: Props): React.ReactElement {
  const { allProducts } = useProducts()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: allProducts })
  }, [allProducts])

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
  }, [allProducts, state.filters])


  const updateFilters = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let { name, value } = e.currentTarget
    
    if (name === 'category' || name === 'vendor') {
      value = e.currentTarget.textContent !== null ? value : ''
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

export const useFilter = () => {
  return useContext(FilterContext)
}
