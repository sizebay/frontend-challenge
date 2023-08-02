import { useProducts } from '../../context/productsContext'
import { ProductImage, Loading } from '../../components'
import { BackToProductsButton } from './BackToProductsButton'
import { SingleProductContent } from './SingleProductContent'
import useProductOnMount from '../../hooks/useProductOnMount'
import ErrorPage from '../ErrorPage'

const SingleProductPage = () => {
  useProductOnMount()
  const {
    singleProduct,
    singleProductLoading,
    singleProductError,
  } = useProducts()

  const { image } = { ...singleProduct }

  if (singleProductLoading) {
    return <Loading />
  }
  
  if (singleProductError) {
    return <ErrorPage />
  }

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

export default SingleProductPage
