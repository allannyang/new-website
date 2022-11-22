import styles from "../styles/onlysharks.module.css";
import buttonstyles from "../styles/button.module.css";
import SocialButton from "../components/SocialButton";
import Button from "../components/Button";
import SmallerButton from "../components/SmallerButton";
import BGBubbly from "../components/BGBubbly";
import Card from "../components/Card";

const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles.projectback}></div>
      <br></br>
      <br></br>
      <div className={styles.projecttext}>
        <br></br>
        <img
          src="../onlysharkslogo.png"
          width="300px"
          image-rendering="smooth"
          alt=""
        ></img>
        <br></br>
        <p2>
          Built using Rust, diesel.rs, rocket.rs, jsonwebtoken, PostgreSQL,
          sodiumoxide and MediBang
        </p2>
        <br></br>
        <p>
          OnlySharks is an experimental shark-themed microblogging service built
          by a team of 3 people: <em>Evie Viau</em>, <em>Amin Khatatbeh</em>,
          and <em>myself</em>. It&apos;s like a mix of <strong>Twitter</strong>{" "}
          and <strong>emoj.li</strong>. We&apos;ve incorporated many major
          features, including user registration/login, various security
          features, profile customization, search and post/image sharing.
        </p>
        <br></br>
        <p>OnlySharks&apos; login page:</p>
        <img
          className={styles.specialimage}
          src="../onlysharks1.png"
          width="80%"
          length="48px"
          size="fluid"
          alt=""
        ></img>
        <br></br>
        <p>The main user interface:</p>
        <img
          className={styles.specialimage}
          src="../onlysharks2.png"
          width="80%"
          length="48px"
          size="fluid"
          alt=""
        ></img>
        <br></br>
        <br></br>
        <Button
          className={styles.button}
          path="https://devpost.com/software/sharksonly"
        >
          Check it out on Devpost!
        </Button>
        <br></br>
        <br></br>
        <SmallerButton className={styles.button} path="Projects">
          Back
        </SmallerButton>
      </div>
      <BGBubbly></BGBubbly>
    </div>
  );
};

export default Project;

//c.strokeStyle = 'white' c.fillStyle = 'black' c.rect(100, 100, 100, 100) c.stroke() c.fill()
