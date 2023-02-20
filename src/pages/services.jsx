import styles from '../app/page.module.css'
import Header from '../components/header'

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