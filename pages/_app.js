import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>MELI technical test</title>
      <meta name="description" content="technical test" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
