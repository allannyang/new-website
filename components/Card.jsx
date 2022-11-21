import styles from "../styles/card.module.css";
import Button from "./Button";
import { useRouter } from "next/router";

const Card = ({ image, title, description, path }) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={image} className={styles.image} />
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <button className={styles.button} onClick={() => router.push(path)}>
          View Project
        </button>
      </div>
    </div>
  );
};

export default Card;
