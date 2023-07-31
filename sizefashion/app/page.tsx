import Carousel from '@components/Carousel';
import ItemListContainer from '@components/ItemListContainer';
import Logo from '@components/Logo';
import ItemsContextProvider from '@context/ItemsContext';
import Head from 'next/head'
import React from 'react'

const Home = () => {

  return (
    <>
      <Head>
        <title>SizeFashion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className='bg-white flex flex-col items-center'>

        <Logo />

        <ItemsContextProvider>
          <Carousel />
          <ItemListContainer />
        </ItemsContextProvider>

        <footer>
          <a
            href="https://www.linkedin.com/in/mateusbernardo/"
            target="_blank"
            rel="noopener noreferrer"
            className='no-underline text-xs'
          >
            mateus b
          </a>
        </footer>
      </div>
    </>
  )
}

export default Home;