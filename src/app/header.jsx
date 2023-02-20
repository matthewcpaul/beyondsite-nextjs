import { Inter } from '@next/font/google'
import styles from '../app/page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <ul className={styles.navPrimary}>
          <li className={`base-input-class ${inter.className} ${styles.navItem}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`base-input-class ${inter.className} ${styles.navItem}`}>
            <Link href="/audiences">Audiences</Link>
          </li>
          <li className={`base-input-class ${inter.className} ${styles.navItem}`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`base-input-class ${inter.className} ${styles.navItem}`}>
            <Link href="/services">Services</Link>
          </li>
          <li className={`base-input-class ${inter.className} ${styles.navItem}`}>
            <Link href="/principles">Principles</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}