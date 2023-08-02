import React from 'react'
import { getImageTags } from '../utils/helpers';


export function ProductImage({ image = '' }): React.ReactElement {
  const imageSrc = getImageTags(image)

  return (
    <img src={imageSrc} alt='main' className='Imagem do produto' />  
  )
}

export default ProductImage
