import React from 'react'
import { ProductDataType } from '../utils/productData'
import Product from './Product'

interface GridViewProps {
  filteredProducts: ProductDataType[];
}

function GridView({ filteredProducts }: GridViewProps) {
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
