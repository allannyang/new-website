import Link from "next/link";
import styles from "../styles/topbar.module.css";

const TopBar = () => {
  return (
    <nav className={styles.topbar}>
      <Link href="/" passHref>
        <a className={styles.nameLink}>Allan Yang</a>
      </Link>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
};

export default TopBar;
