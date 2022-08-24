import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import { Layout } from 'components/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Home page" />
      </Head>

    <Layout></Layout>
    </div>
  )
}