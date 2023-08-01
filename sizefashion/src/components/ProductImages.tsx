import React from 'react'
import { getImageTags } from '../utils/helpers';

const ProductImages: React.FC<{ image: string | undefined }> = ({ image = '' }) => {
  const imageSrc = getImageTags(image)

  return (
    <div>
      <img src={imageSrc} alt='main' className='main' />  
    </div>
  )
}

export default ProductImages
