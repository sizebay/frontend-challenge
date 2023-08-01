import React from 'react'
import { productDataType } from '../utils/productData'

const GridView: React.FC<{ filteredProducts: productDataType[] }> = ({
  filteredProducts,
}) => {
  return (
    <div>
      <div className='products-container grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
        {filteredProducts.map((product, index) => {
          return (
            <div key={index}>{product.title}</div>
          )
        })}
      </div>
    </div>
  )
}

export default GridView
