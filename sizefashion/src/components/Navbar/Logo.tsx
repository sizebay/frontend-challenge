import whiteLogo from '../../assets/logo_white.png'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to='/'>
      <img src={whiteLogo} className='w-48' alt='sizebay' />
    </Link>
  )
}
