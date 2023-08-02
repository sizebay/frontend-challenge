import { useProducts } from '../../context/productsContext'
import ErrorPage from '../ErrorPage'

export const SingleProductContent = () => {
  const { singleProduct } = useProducts()

  if(!singleProduct) {
    return (
      <ErrorPage />
    )
  }

  return (
    <section className='content ml-0 md:ml-5'>
      <h2 className='text-black mb-5 text-5xl'>{singleProduct.title}</h2>
      <p className='text-black leading-4 max-w-2xl'>{singleProduct.category}</p>

      {singleProduct.vendor && (
        <p className='text-black mb-5'>
          <span className='font-bold'>Marca: </span>
          {singleProduct.vendor}
        </p>
      )}

    </section>
  )
}
