import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sizebay Frontend Challenge</title>
        <meta
          author="@SantosMaycon"
          name="description"
          content="Uma aplicação web que permita ao usuário criar tarefas, acompanhar seu progresso e administrar suas pendências em uma lista, por meio de um layout amigável."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
