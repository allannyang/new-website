import styles from "../styles/card.module.css";
import Button from "./Button";
import { useRouter } from "next/router";

const Card = ({ image, title, tools, description, buttontext, path }) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.text}>
          <img src={image} className={styles.image} />
          <p className={styles.title}>{title}</p>
          <p className={styles.tools}>{tools}</p>
          <br />
          <p className={styles.description}>{description}</p>
        </div>
        <button className={styles.button} onClick={() => router.push(path)}>
          {buttontext}
        </button>
      </div>
    </div>
  );
};

export default Card;
