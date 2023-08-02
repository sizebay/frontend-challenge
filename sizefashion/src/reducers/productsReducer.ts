import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

import { initialStateType } from '../context/productsContext'


const productsReducer = (state: initialStateType, action: any) => {
  switch(action.type) {
    case GET_PRODUCTS_BEGIN:
      return { ...state, productsLoading: true }
    case GET_PRODUCTS_SUCCESS:
      const allProducts = action.payload.map((product: any) => {
        let { category, image, title, vendor, id } = product

        return {
          category,
          image,
          title,
          vendor,
          id
        }
      })
      
      return { ...state, productsLoading: false, allProducts }
    case GET_PRODUCTS_ERROR:
      return { ...state, productsError: true, productsLoading: false }
    case GET_SINGLE_PRODUCT_BEGIN:
      return {...state, singleProductLoading: true}
    case GET_SINGLE_PRODUCT_SUCCESS:
      return { ...state, singleProduct: action.payload, singleProductLoading: false }
    case GET_SINGLE_PRODUCT_ERROR:
      return { ...state, singleProductError: true, singleProductLoading: false}
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default productsReducer
