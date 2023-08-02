import React from 'react'
import { getImageTags } from '../utils/helpers';

const ProductImage: React.FC<{ image: string | undefined }> = ({ image = '' }) => {
  const imageSrc = getImageTags(image)

  return (
    <img src={imageSrc} alt='main' className='Imagem do produto' />  
  )
}

export default ProductImage
