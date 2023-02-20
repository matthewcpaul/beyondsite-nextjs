import { Inter } from '@next/font/google'
import styles from '../app/page.module.css'
import Header from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <h1>Services</h1>
      </main>
    </>
  )
}