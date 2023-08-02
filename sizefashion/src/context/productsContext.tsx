import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/productsReducer'
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'
import { ProductDataType } from '../utils/productData'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

export type initialStateType = {
  allProducts: ProductDataType[] | []
  productsError: boolean
  singleProduct: ProductDataType | null
  singleProductLoading: boolean
  singleProductError: boolean
  fetchSingleProduct: (id: string) => void
}

const initialState: initialStateType = {
  allProducts: [],
  productsError: false,
  singleProduct: null,
  singleProductLoading: false,
  singleProductError: false,
  fetchSingleProduct: (id: string) => null,
}

type Props = {
  children?: React.ReactNode
};

export const ProductsContext = React.createContext<initialStateType>(initialState)


export function ProductsProvider({children}: Props): React.ReactElement {
  
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchSingleProduct = (slug: string) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const singleProduct: ProductDataType = state.allProducts.find(
        (product: ProductDataType) => product.id === slug
      )
      
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
        const queryResult = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}`)
        const result = queryResult.data.map((obj: ProductDataType) => ({ ...obj, id: uuidv4() }))
        
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

export const useProducts = () => {
  return useContext(ProductsContext)
}
