import { BackToProductsButton } from './SingleProductPage/BackToProductsButton'
const ErrorPage = () => {
  return (
    <div className='page-100 bg-gray flex justify-center items-center text-center'>
      <section>
        <h1 className='text-9xl mb-10'>Ooops!</h1>
        <h3 className='mb-10'>Nada para ver aqui...</h3>
        <BackToProductsButton />
      </section>
    </div>
  )
}

export default ErrorPage
