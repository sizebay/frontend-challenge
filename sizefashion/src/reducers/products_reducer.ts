import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

import { initialStateType } from '../context/products_context'


const products_reducer = (state: initialStateType, action: any) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, productsLoading: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const allProducts = action.payload.map((product: any) => {
      let { category, image, title, vendor } = product

      return {
        category,
        image,
        title,
        vendor
      }
    })
    
    return { ...state, productsLoading: false, allProducts }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, productsError: true, productsLoading: false }
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN){
    return {...state, singleProductLoading: true}
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return { ...state, singleProduct: action.payload, singleProductLoading: false }
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR){
    return { ...state, singleProductError: true, singleProductLoading: false}
  }
  
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
