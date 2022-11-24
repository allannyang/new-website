import BGBubbles from "../components/BGBubbles";
import Button from "../components/Button";
import ExpandCard from "../components/ExpandCard";
import LangCard from "../components/LangCard";
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
          Waterloo and Business Administration at Wilfrid Laurier University.
          I&apos;m passionate about using digital tools to build fun projects
          and solve tricky problems.
          <br />
        </p>

        <p>
          The langauges I&apos;m most familiar with are Java and C, but
          I&apos;ve also worked with Python, SQL, Racket, HTML, CSS, and
          JavaScript. In terms of tools, I&apos;ve worked with React, NextJs,
          Node.js, Google Workspace/MS Office (of course), and I like to create
          any graphics I need using MediBang, Asesprite, etc.
          <br />
          <br />
        </p>

        <ExpandCard></ExpandCard>
        <br />
        <br />

        <p>
          If you&apos;d like to reach out, please feel free to send me an email
          at{" "}
          <a href="mailto:mailallanyang@gmail.com">mailallanyang@gmail.com</a>,
          or send me a message on{" "}
          <a href="https://www.linkedin.com/in/allannyang/">LinkedIn</a>!
          I&apos;ll get back to you right away.
          <br />
        </p>
        <p>
          I hope to briefly summarize what I&apos;m interested in and show you
          some of the stuff I&apos;ve been working on via this website!
          <br />
          <br />
        </p>
        <p className={styles.specialabout}>
          <em>TL;DR: Press the button below ↓</em>
          <br></br>
          <Button path="Projects">Check my projects out here!</Button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </p>

        <br />
      </div>
      <BGBubbles></BGBubbles>
    </div>
  );
};

export default About;
