import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <main className={styles.main}>
    <Head>
      <title>Carlos</title>
    </Head>
    <h1>Hello World</h1>
    <Link href="/about">About</Link>
    <Link href="/coins/22">Coin 22</Link>
  </main>
}
