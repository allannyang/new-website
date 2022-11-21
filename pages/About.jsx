import BGBubbles from "../components/BGBubbles";
import Button from "../components/Button";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <br />
      <div className={styles.specialabout}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>
          I&apos;m <em>Allan Yang</em>.
        </h1>
        <p>
          <img
            className={styles.specialimage}
            src="../photo2.jpg"
            width="150px"
            alt=""
          ></img>
          <br />
          <br />
          Nice to meet you - and thanks for checking out my website! I&apos;m a
          second-year student studying Computer Science at the University of
          Waterloo and Business Administration at Wilfrid Laurier University. I
          may not be good at it (yet), but I love using digital tools to build
          fun projects and solve tricky problems.
          <br />
          <br />
          <br />
          The langauges I&apos;m most familiar with are Java and C, but
          I&apos;ve also worked with Python, SQL, Racket, HTML, CSS, and
          JavaScript. In terms of tools, I&apos;ve worked with React, Node.js,
          Google Workspace/MS Office, and create graphics using MediBang,
          Asesprite, etc.
          <br />
          <br />
          <br />
          If you&apos;d like to reach out, please feel free to send me an email
          at mailallanyang@gmail.com, or send me a message on LinkedIn!
          I&apos;ll get back to you right away.
          <br />
          <br />
          <br />I hope to briefly summarize what I&apos;m interested in and show
          you some of the projects I&apos;ve been working on via this website!
        </p>
        <p className={styles.specialabout}>
          <em>TL;DR: Press the button below ↓</em>
          <br></br>
          <Button path="projects">Check my projects out here!</Button>
          <br></br>
        </p>
        <br />
      </div>
      <BGBubbles></BGBubbles>
    </div>
  );
};

export default About;
