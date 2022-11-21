import styles from "../styles/projects.module.css";
import SocialButton from "../components/SocialButton";
import Button from "../components/Button";
import BGBubbles from "../components/BGBubbles";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div classname={styles.project}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className={styles.projectheader}>Projects</h1>
      <div className={styles.cards}>
        <Card
          image="../ALPHAWAVERBanner.png"
          title="ALPHAWAVER"
          description="a game, testing how the text fits currently."
          path="alphawaver"
        ></Card>
        <Card
          image="../OnlySharksBanner.png"
          title="OnlySharks"
          description="a game, testing how the text fits currently."
          path="onlysharks"
        ></Card>
      </div>
      <BGBubbles></BGBubbles>
    </div>
  );
};

export default Projects;

//c.strokeStyle = 'white' c.fillStyle = 'black' c.rect(100, 100, 100, 100) c.stroke() c.fill()
