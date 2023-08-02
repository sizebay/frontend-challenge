import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../../context/products_context'
import { ProductImage, Loading } from '../../components'
import { BackToProductsButton } from './BackToProductsButton'
import { SingleProductContent } from './SingleProductContent'
import ErrorPage from '../ErrorPage'

const SingleProductPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const {
    singleProduct,
    fetchSingleProduct,
    singleProductLoading,
    singleProductError,
    allProducts,
  } = useProductsContext()

  const { image } = { ...singleProduct }

  // caso aconteça um refresh na tela de produto
  useEffect(() => {
    if (slug) {
      fetchSingleProduct(slug)
    }
    // eslint-disable-next-line
  }, [slug, allProducts])

  if (singleProductLoading) {
    return <Loading />
  }
  if (singleProductError) {
    return <ErrorPage />
  } else {
    return (
      <div>
        <div className='py-20 px-0 w-[90vw] my-0 mx-auto max-w-6xl lg:w-[95vw] min-h-max' data-testid="teste">
          <BackToProductsButton />
          <div className='flex flex-col md:flex-row'>
            <ProductImage image={image} />
            <SingleProductContent />
          </div>
        </div>
      </div>
    )
  }
}

export default SingleProductPage
