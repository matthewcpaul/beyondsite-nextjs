import { Inter } from '@next/font/google'
import Header from '../app/header'
import styles from '../app/page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <h1 className={`base-input-class ${inter.className} ${styles.h1}`}>Services</h1>
      </main>
    </>
  )
}