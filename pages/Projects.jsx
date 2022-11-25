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
          description="A story-based RPG game! Escape from an unusual world with your allies' help."
          tools="Java"
          buttontext="View Project"
          path="alphawaver"
        ></Card>
        <Card
          image="../OnlySharksBanner.jpg"
          title="OnlySharks"
          description="Microblogging, but Only Sharks. What does that mean? Why not find out?"
          tools="Rust, PostgreSQL"
          buttontext="View Project"
          path="onlysharks"
        ></Card>
        <Card
          image="../CharacterCreator9kBanner.png"
          title="CharacterCreator9k"
          tools="Java"
          description="A (simulated) computer virus disguised as a friendly character creator."
          buttontext="View Project"
          path="https://devpost.com/software/terrible-hack"
        ></Card>
        <Card
          image="../PreOwnedPalBanner.png"
          title="PreOwnedPal"
          tools="Python"
          description="Web scraper tracking pre-owned item listings. Alerts user via email when keywords match."
          buttontext="Work In Progress"
          path=""
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
