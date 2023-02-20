import { Inter } from '@next/font/google'
import styles from '../app/page.module.css'
import Header from '../app/header'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className={styles.center}>
          <h1 className={`base-input-class ${inter.className} ${styles.h1}`}>
            Welcome to BeyondSite, your event staffing leadership partner for big-production events and conferences.
          </h1>
          <p className={`base-input-class ${inter.className} ${styles.description}`}>
            Our website is currently undergoing a relaunch with a whole new look and feel, and we’re stoked to share our story and services through this experiential brand system. Check back in March for our official website and brand launch. For any current event staffing and management inquiries, please feel free to reach out to us at <a href="mailto:ryan@beyond.site">ryan@beyond.site</a>.
          </p>
          <p className={`base-input-class ${inter.className} ${styles.description}`}>
            In the meantime, see you on-site!
          </p>
        </div>
      </main>
    </>
  )
}
