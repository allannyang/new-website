import Link from "next/link";
import styles from "../styles/bottombar.module.css";

const BottomBar = () => {
  return (
    <nav className={styles.bottombar}>
      <a className={styles.nameLink}>© Allan Yang, 2022</a>
      <br></br>
      <a className={styles.nameLink}>Made with 😭🤦‍♂️ in Waterloo, ON</a>
    </nav>
  );
};

export default BottomBar;
