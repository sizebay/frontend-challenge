import { Logo } from './Logo'

const Nav = () => {
  return (
    <div className='w-[95vw] h-20 flex items-center justify-center'>
      <div className='w-[95vw] my-0 mx-auto max-w-6xl'>
        <div className='flex items-center justify-center'>
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default Nav

