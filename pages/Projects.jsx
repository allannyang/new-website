import styles from "../styles/projects.module.css";
import SocialButton from "../components/SocialButton";
import Button from "../components/Button";
import BGBubbles from "../components/BGBubbles";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div className={styles.project}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className={styles.projectheader}>Projects</h1>
      <p3>
        <em>(More coming soon!)</em>
      </p3>
      <div className={styles.cards}>
        <Card
          image="../ALPHAWAVERBanner.png"
          title="ALPHAWAVER"
          description="A short story-based RPG game!"
          path="alphawaver"
        ></Card>
        <Card
          image="../OnlySharksBanner.png"
          title="OnlySharks"
          description="Microblogging, but Only Sharks."
          path="onlysharks"
        ></Card>
      </div>
      <BGBubbles></BGBubbles>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Projects;

//c.strokeStyle = 'white' c.fillStyle = 'black' c.rect(100, 100, 100, 100) c.stroke() c.fill()
