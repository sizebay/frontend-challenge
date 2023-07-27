import Carousel from '@/components/Carousel'
import CategoryFilter from '@/components/CategoryFilter'
import TextInput from '@/components/Input/Text'
import ItemsGrid from '@/components/ItemsGrid'
import Logo from '@/components/Logo'
import SortingFilter from '@/components/SortingFilter/'
import { ItemsContextProvider } from 'context/ItemsContext'
import Head from 'next/head'

// TODO >> A lot of stuff to do

export default function Home() {

  return (
    <>
      <Head>
        <title>SizeFashion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          backgroundColor: '#f3f3f3',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >

        <Logo />

        <ItemsContextProvider>
          <Carousel />

          <div
            style={{
              width: '75%',
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              padding: 4
            }}
          >
            <div
              style={{
                backgroundColor: '#403b37',
                height: 44,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 8,
                marginTop: 12,
              }}
            >
              <TextInput />
              <SortingFilter />
            </div>
            <div
              style={{
                height: 44,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 8,
                marginTop: 12,
              }}
            >
              <CategoryFilter />
            </div>

            <ItemsGrid />

          </div>
        </ItemsContextProvider>

        <footer>
          <a
            href="https://www.linkedin.com/in/mateusbernardo/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', fontSize: 10 }}
          >
            Done in a hurry by Mateus B
          </a>
        </footer>
      </div>
    </>
  )
}
