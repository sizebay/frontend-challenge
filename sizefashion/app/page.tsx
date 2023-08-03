import Carousel from '@components/Carousel';
import ItemListContainer from '@components/ItemListContainer';
import Logo from '@components/Logo';
import ItemsContextProvider from '@context/Items';
import React from 'react'

const Home = () =>
  <div className="bg-white flex flex-col items-center">

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
        className="no-underline text-xs"
      >
        mateus b
      </a>
    </footer>
  </div>;

export default Home;
