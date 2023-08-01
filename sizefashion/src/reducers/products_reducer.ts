import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
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
  
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
