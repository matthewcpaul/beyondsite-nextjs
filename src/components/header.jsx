import styles from '../app/page.module.css'
import Image from 'next/image'
import LogoDark from '../../public/beyondsite_logo_dark.svg'
import LogoLight from '../../public/beyondsite_logo_light.svg'
import Link from 'next/link'
import { useRouter } from 'next/router';

// Navigation Bar
const NavBar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div className={styles.header}>
      <Image src={LogoLight} alt="BeyondSite logo for light theme" className={styles.logoLight}/>
      <Image src={LogoDark} alt="BeyondSite logo for dark theme" className={styles.logoDark}/>
      <nav className={styles.navPrimary}>
        <Link href='/' className={currentRoute === '/' ? styles.navLinkActive : styles.navLink}>Home</Link>
        <Link href='/audiences' className={currentRoute === '/audiences' ? styles.navLinkActive : styles.navLink}>Audiences</Link>
        <Link href='/services' className={currentRoute === '/services' ? styles.navLinkActive : styles.navLink}>Services</Link>
        <Link href='/principles' className={currentRoute === '/principles' ? styles.navLinkActive : styles.navLink}>Principles</Link>
        <Link href='/about' className={currentRoute === '/about' ? styles.navLinkActive : styles.navLink}>About</Link>
      </nav>
    </div>
  );
};

export default NavBar;