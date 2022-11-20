import styles from "../styles/projects.module.css";
import SocialButton from "../components/SocialButton";
import Button from "../components/Button";
import BGBubbles from "../components/BGBubbles";

const Projects = () => {
  return (
    <div classname={styles.project}>
      <div className={styles.projectback}></div>
      <div className={styles.projectbreak}></div>
      <h1 className={styles.projectheader}>Projects</h1>
      <br></br>
      <br></br>
      <div className={styles.projecttext}>
        <img
          src="../ALPHAWAVERLOGO.png"
          width="250px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <br></br>
        <p2>Built using Java and Asesprite</p2>
        <br></br>
        <p>
          <em3>ALPHAWAVER</em3> is a top-down pixel RPG game I developed over
          six weeks. You control Alphs, our &quot;hero&quot; who awakens from
          his dream to find himself lost in a peculiar world. You&apos;ll meet
          unusual allies as you seek to understand where you really are. The
          game doesn&apos;t function as you&apos;d expect, though... (this is a
          feature, NOT bugs!!)
        </p>
        <p>On your journey, you can expect to:</p>
        <p>Recruit allies!</p>
        <img
          src="../player3.gif"
          width="64px"
          length="48px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <img
          src="../player2.gif"
          width="64px"
          length="48px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <img
          src="../player1.gif"
          width="64px"
          length="48px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <br></br>
        <p>Defeat enemies!</p>
        <img
          src="../mnsrbean.gif"
          width="128px"
          length="48px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <img
          src="../creepyenemy.gif"
          width="128px"
          length="48px"
          image-rendering="pixelated"
        ></img>
        <img
          src="../algis.gif"
          width="128px"
          length="48px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <img
          src="../fifth.gif"
          width="128px"
          length="48px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <br></br>
        <p>Traverse different landscapes!</p>
        <img
          className={styles.specialimage}
          src="../forest.png"
          height="175px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <img
          className={styles.specialimage}
          src="../ruins.png"
          height="175px"
          image-rendering="pixelated"
        ></img>
        <img
          className={styles.specialimage}
          src="../lamps.png"
          height="175px"
          image-rendering="pixelated"
        ></img>
        <img
          className={styles.specialimage}
          src="../waterfall.png"
          height="175px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <img
          className={styles.specialimage}
          src="../final.png"
          height="175px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <br></br>
        <p>Finish the entire game in 10 minutes! (your time is precious)</p>
        <img
          className={styles.specialimage}
          src="../normalEnd.png"
          height="175px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <br></br>
        <p>Trailer</p>
        <video
          className={styles.specialimage}
          src="ALPHAWAVER Trailer.mp4"
          type="video/mp4"
          video
          width="50%"
          alt=""
          controls
        ></video>
        <br></br>
        <br></br>
        <Button className={styles.button} path="https://github.com/allannyang">
          Play it now*! (*soon)
        </Button>
        <br></br>
        <br></br>
      </div>
      <div className={styles.projectbreak}></div>
      <div className={styles.projecttext}>
        <br></br>
        <img
          src="../onlysharkslogo.png"
          width="250px"
          length="200px"
          image-rendering="smooth"
          alt=""
        ></img>
        <br></br>
        <p2>
          Built using Rust, diesel.rs, jsonwebtoken, PostgreSQL, sodiumoxide and
          MediBang
        </p2>
        <br></br>
        <p>
          OnlySharks is an experimental shark-themed microblogging service built
          by a team of 3 people: <em>Evie Viau</em>, <em>Amin Khatatbeh</em>,
          and <em>myself</em>. It&apos;s like a mix of <strong>Twitter</strong>{" "}
          and <strong>emoj.li</strong>. We&apos;ve incorporated many major
          features, including user registration/login, various security
          features, profile customization, search and post/image sharing.🦈💙
        </p>
        <br></br>
        <p>OnlySharks&apos; login page:</p>
        <img
          className={styles.specialimage}
          src="../onlysharks1.png"
          width="60%"
          length="48px"
          size="fluid"
          alt=""
        ></img>
        <br></br>
        <p>The main user interface:</p>
        <img
          className={styles.specialimage}
          src="../onlysharks2.png"
          width="60%"
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
      </div>
      <div className={styles.projectbreak}></div>
      <BGBubbles></BGBubbles>
    </div>
  );
};

export default Projects;

//c.strokeStyle = 'white' c.fillStyle = 'black' c.rect(100, 100, 100, 100) c.stroke() c.fill()
