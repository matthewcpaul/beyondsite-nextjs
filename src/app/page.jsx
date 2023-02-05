import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
      <h1 className={`base-input-class ${inter.className} ${styles.h1}`}>
        BeyondSite is coming back soon, different, and better than ever.
      </h1>
      <p className={`base-input-class ${inter.className} ${styles.description}`}>
        We’re in the process of building a new website while we roll out an entirely new brand identity system. This experiential website will show a complete picture of the event services we provide, the principles that guide us, the types of work we’re best at, and unique pathways for clients to connect with & hire us for event program management, staffing, and event staff leadership; event workers to join the tribe & work with us; and the global events community to see what we’re up to.
        </p>
      </div>
    </main>
  )
}
