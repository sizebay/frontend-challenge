import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions'
import { productDataType } from '../utils/productData'
import { API_ENDPOINT } from '../utils/constants'
import axios from 'axios'

export type initialStateType = {
  allProducts: productDataType[] | []
  productsLoading: boolean
  productsError: boolean
}

const initialState: initialStateType = {
  allProducts: [],
  productsLoading: false,
  productsError: false,
}

type Props = {
  children?: React.ReactNode
};

export const ProductsContext = React.createContext<initialStateType>(initialState)

export const ProductsProvider: React.FC<Props> = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
    console.log('dkjaklsdjakldjalasdkja')
    const fetchProducts = async () => {
      dispatch({ type: GET_PRODUCTS_BEGIN })
      try {
        const queryResult = await axios.get(API_ENDPOINT)
        const result = queryResult.data
        console.log(result)

        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: result })
      } catch (error) {
        console.log(error)
        dispatch({ type: GET_PRODUCTS_ERROR })
      }
    }
    fetchProducts()
  }, [])

  return (
    <ProductsContext.Provider
      value={{ ...state }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
