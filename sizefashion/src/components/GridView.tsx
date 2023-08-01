import React from 'react'
import { productDataType } from '../utils/productData'
import Product from './Product'

const GridView: React.FC<{ filteredProducts: productDataType[] }> = ({
  filteredProducts,
}) => {
  return (
    <div>
      <div className='products-container grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
        {filteredProducts.map((product, index) => {
          return <Product key={index} product={product} />
        })}
      </div>
    </div>
  )
}

export default GridView
