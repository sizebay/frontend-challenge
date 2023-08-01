import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { productDataType } from '../utils/productData'
import { getImageTags } from '../utils/helpers'

const Product: React.FC<{ product: productDataType }> = ({ product }) => {
  const { image, vendor, title } = product
  const imageSrc = getImageTags(image)

  return (
    <div>
      <div className='group relative bg-slate-600 rounded-lg' data-testid="product">
        <Link to={`/products/${title}`} data-testid="link-to-product">
          <img src={imageSrc} alt={title} className='h-44 w-full block object-cover rounded-md ease-linear duration-300 group-hover:opacity-50' />
          <div className='group-hover:opacity-100 absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 bg-black flex items-center justify-center w-10 h-10 rounded-3xl ease-linear duration-300 opacity-0 cursor-pointer'>
            <FaSearch className='text-xl fill-white' />
          </div>
        </Link>
      </div>
      <footer className='mt-1 flex justify-between items-center flex-col tracking-widest'>
        <h5 className='mb-0 font-bold'>{title}</h5>
        <p className='font-normal color-black'>{vendor}</p>
      </footer>
    </div>
  )
}


export default Product
