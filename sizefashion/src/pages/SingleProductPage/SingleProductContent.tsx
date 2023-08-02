import { useProducts } from '../../context/productsContext'

export const SingleProductContent = () => {
  const { singleProduct } = useProducts()

  const { title, vendor, category } = { ...singleProduct}
  return (
    <section className='content ml-0 md:ml-5'>
      <h2 className='text-black mb-5 text-5xl'>{title}</h2>
      <p className='text-black leading-4 max-w-2xl'>{category}</p>

      {vendor && (
        <p className='text-black mb-5'>
          <span className='font-bold'>Marca: </span>
          {vendor}
        </p>
      )}

    </section>
  )
}
