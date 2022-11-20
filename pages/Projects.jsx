import styles from "../styles/projects.module.css";
import SocialButton from "../components/SocialButton";
import Button from "../components/Button";

const Projects = () => {
  return (
    <div classname={styles.project}>
      <div className={styles.projectback}></div>
      <div className={styles.projectbreak}></div>
      <h1 className={styles.projectheader}>Projects</h1>
      <br></br>
      <div className={styles.projecttext}>
        <img
          src="../ALPHAWAVERLOGO.png"
          width="300px"
          length="200px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <p>
          A sleepy student awakes from his dream to find himself lost in a
          peculiar world.
        </p>
        <p>
          As he explores, he meets unlikely allies and they seek to unravel the
          truth of where they are. As the journey goes on, each location is more
          absurd than the last. Will they be able to escape before the seams of
          reality fall apart?
        </p>
        <p>
          ALPHAWAVER is a fully-featured top-down pixel RPG game built in Java
          over 6 weeks. On your journey, you can expect to:
        </p>
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
          height="200px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <img
          className={styles.specialimage}
          src="../ruins.png"
          height="200px"
          image-rendering="pixelated"
        ></img>
        <img
          className={styles.specialimage}
          src="../lamps.png"
          height="200px"
          image-rendering="pixelated"
        ></img>
        <img
          className={styles.specialimage}
          src="../waterfall.png"
          height="200px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <img
          className={styles.specialimage}
          src="../final.png"
          height="200px"
          image-rendering="pixelated"
          alt=""
        ></img>
        <br></br>
        <p>Finish the entire game in 10 minutes! (your time is precious)</p>
        <img
          className={styles.specialimage}
          src="../normalEnd.png"
          width="300px"
          length="48px"
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
          width="100%"
          alt=""
          controls
        ></video>
        <br></br>
        <br></br>
        <Button className={styles.button} path="https://github.com/allannyang">
          Play it on GitHub!
        </Button>
        <br></br>
        <br></br>
      </div>
      <div className={styles.projectbreak}></div>
      <div className={styles.projecttext}>
        <br></br>
        <img
          src="../onlysharkslogo.png"
          width="330px"
          length="200px"
          image-rendering="smooth"
          alt=""
        ></img>
        <p>
          OnlySharks is a shark-themed microblogging service built in{" "}
          <strong>Rust</strong> by a team of 3 people: <em>Evie Viau</em>,{" "}
          <em>Amin Khatatbeh</em>, and <em>myself</em>. It&apos;s like a mix of{" "}
          <strong>Twitter</strong> and <strong>emoj.li</strong>. We&apos;ve
          incorporated many major features, including user registration/login,
          various security features, profile customization, search and
          post/image sharing.🦈💙
        </p>
        <br></br>
        <p>OnlySharks&apos; login page:</p>
        <img
          className={styles.specialimage}
          src="../onlysharks1.png"
          width="100%"
          length="48px"
          size="fluid"
          alt=""
        ></img>
        <br></br>
        <p>The main user interface:</p>
        <img
          className={styles.specialimage}
          src="../onlysharks2.png"
          width="100%"
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
      <div className={styles.projecttext}>
        <br></br>
        <img
          src="../bagologo.png"
          width="300px"
          length="200px"
          image-rendering="sharp-edges"
        ></img>
        <p>
          The only bag you need, on the <em2>go!</em2>
        </p>
        <p>
          <em2>BaGo</em2> is a reusable bag you can store comfortably anywhere,
          like your wallet&apos;s credit card compartment! It&apos;s a
          convenience-focused approach to single-use plastic bags and reusable
          bags alike. <em2>BaGo</em2> comes with a credit-card shaped holder,
          and by pulling the strings on top of the holder, the bag retracts into
          it for easy storage.
        </p>
        <p>
          <em2>BaGo</em2> was conceptualized, built and pitched by Vivek
          Bhardwaj, Rovin Parasnauth, Nikolas Kotsovolos, Juho Choi and myself
          for Wilfrid Laurier University&apos;s New Venture project, partnered
          with BDO Canada. We broke down its targeted market segment, its
          business model, growth trajectory, retail/online relationships, key
          partners, logistics/finances, sales forecasts, and expenses in order
          to create our business plan.
        </p>
        <p>
          Here&apos;s a photo of our first prototype. It&apos;s seen better
          days, but it took us to the semi-finals!
        </p>
        <img
          className={styles.specialimage}
          src="../bagoprototype.png"
          width="300px"
          image-rendering="pixelated"
          alt=""
        ></img>
      </div>
      <div className={styles.projectbreak}></div>
    </div>
  );
};

export default Projects;

//c.strokeStyle = 'white' c.fillStyle = 'black' c.rect(100, 100, 100, 100) c.stroke() c.fill()
