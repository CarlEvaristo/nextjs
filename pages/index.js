import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <main className={styles.main}>
    <Head>
      <title>Carlos</title>
    </Head>
    <h1>Cryptocurrency Coins</h1>
    <Link href="/coins" className={styles.link}>Go to all coins</Link>
  </main>
}
