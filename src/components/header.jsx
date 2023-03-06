import styles from '../app/page.module.css'
// import Image from 'next/image'
import Logo from '../../public/BeyondSite_Logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router';

// Navigation Bar
const NavBar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div className={styles.header}>
      <Link href='/' className={currentRoute === '/' ? styles.navLinkActive : styles.navLink}>
        <Logo className={styles.logo} alt="BeyondSite logo" />
      </Link>
      <nav className={styles.navPrimary}>
        <Link href='/clients' className={currentRoute === '/clients' ? styles.navLinkActive : styles.navLink}>Clients</Link>
        <Link href='/staff' className={currentRoute === '/staff' ? styles.navLinkActive : styles.navLink}>Staff</Link>
        <Link href='/services' className={currentRoute === '/services' ? styles.navLinkActive : styles.navLink}>Services</Link>
        <Link href='/about' className={currentRoute === '/about' ? styles.navLinkActive : styles.navLink}>About</Link>
        <Link href='/portfolio' className={currentRoute === '/portfolio' ? styles.navLinkActive : styles.navLink}>Portfolio</Link>
        <Link href='/contact' className={currentRoute === '/contact' ? styles.navLinkActive : styles.navLink}>Contact</Link>
      </nav>
    </div>
  );
};

export default NavBar;