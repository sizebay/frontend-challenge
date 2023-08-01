import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'
import { productDataType } from '../utils/productData'
import { API_ENDPOINT } from '../utils/constants'
import axios from 'axios'

export type initialStateType = {
  allProducts: productDataType[] | []
  productsLoading: boolean
  productsError: boolean
  singleProduct: productDataType | {}
  singleProductLoading: boolean
  singleProductError: boolean
  fetchSingleProduct: (id: string) => void
}

const initialState: initialStateType = {
  allProducts: [],
  productsLoading: false,
  productsError: false,
  singleProduct: {},
  singleProductLoading: false,
  singleProductError: false,
  fetchSingleProduct: (id: string) => {},
}

type Props = {
  children?: React.ReactNode
};

export const ProductsContext = React.createContext<initialStateType>(initialState)

export const ProductsProvider: React.FC<Props> = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchSingleProduct = (slug: string) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const singleProduct: productDataType = state.allProducts.filter(
        (product: productDataType) => product.title === slug
      )[0]
      if (singleProduct) { // caso retorne undefined com o allProducts sendo []
        dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct })
      }
    } catch (error) {
      console.log(error)
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: GET_PRODUCTS_BEGIN })
      try {
        const queryResult = await axios.get(API_ENDPOINT)
        const result = queryResult.data

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
      value={{ ...state, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
