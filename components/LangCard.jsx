import styles from "../styles/langcard.module.css";
import { useRouter } from "next/router";

const Card = ({ length, description }) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <p6 className={styles.description}>{description}</p6>
      </div>
    </div>
  );
};

export default Card;
