import { Logo } from './Logo'

const Nav = () => {
  return (
    <div className='w-screen h-20 flex items-center justify-center'>
      <div className='w-screen my-0 mx-auto max-w-6xl'>
        <div className='flex items-center justify-center'>
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default Nav

