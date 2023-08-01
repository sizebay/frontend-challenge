const Footer = () => {
  return (
    <div className='h-20 flex flex-col justify-center items-center bg-black text-center'>
      <h5 className='m-2 font-normal leading-5 text-white'>
        &copy; {new Date().getFullYear()}
        <span className='text-blue'> SizeFashion</span>
      </h5>
    </div>
  )
}

export default Footer
