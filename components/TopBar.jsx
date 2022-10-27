import Link from 'next/Link';
import styles from '../styles/topbar.module.css';

const TopBar = () => {
    return (
    <nav className={styles.topbar}>
        <Link href="/" passHref>
            <a className={styles.nameLink}>Allan Yang</a>
        </Link>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Projects">Projects</Link>
    </nav>
    );
  };
  
  export default TopBar;
  