import BGBubbles from "../components/BGBubbles";
import Button from "../components/Button";
import ExpandCard from "../components/ExpandCard";
import ReferenceCard from "../components/ReferenceCard";
import DescCard from "../components/DescCard";
import styles from "../styles/about.module.css";

var references = new Array();
references[0] =
  "Allan is one of the most passionate people I've ever worked with. He pours his heart and soul into his work and his projects really do a great job of showcasing that. - Ali Raza Khan";
references[1] =
  "Allan's always shown to be quite humorous and intelligent while also being able to provide proper insight with any trouble I may have. - Akshay Vakil";
references[2] =
  "I've known Allan for many years, and I can confidently say he's one of the most out-of-the-box people I've met. - Kevin Nguyen";

var i = Math.floor(Math.random() * 3);

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
          student studying Computer Science at the University of Waterloo and
          Business Administration at Wilfrid Laurier University. I&apos;m
          passionate about using digital tools to build fun projects and solve
          tricky problems.
          <br />
        </p>
        <p>
          The langauges I&apos;m most familiar with are Java and C, but
          I&apos;ve also worked on projects with Python, SQL, HTML, CSS,
          JavaScript and Racket. In terms of tools/frameworks, I&apos;ve worked
          with React, NextJS, Node.js, Selenium, and Google Workspace/MS Office
          (of course). I like to create any graphics I need using a variety of
          fun tools, but primarily using MediBang and Asesprite.
          <br />
          <br />
        </p>
        <ExpandCard></ExpandCard>
        <br></br>
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
