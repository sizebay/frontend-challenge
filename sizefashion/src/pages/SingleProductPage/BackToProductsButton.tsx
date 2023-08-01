import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const BackToProductsButton = () => {
  return (
    <Link to='/' className='inline-flex bg-black items-center hover:bg-slate-900 my-10 text-white font-bold py-3 px-5 rounded' data-testid="back-to-products">
      <FaArrowLeft className='text-xl fill-white mr-2' />voltar
    </Link>
  )
}
