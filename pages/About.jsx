import Button from "../components/Button";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>
        I'm <em>Allan Yang</em>.
      </h1>
      <p>
        <img
          className={styles.specialimage}
          src="../photo2.jpg"
          width="150px"
        ></img>
        <br />
        <br />
        Nice to meet you! I'm a second-year student studying Computer Science at
        the University of Waterloo and Business Administration at Wilfrid
        Laurier University. Originally, I'd planned to go to art school, but I
        ended up here somehow...
        <br />
        <br />
        <br />
        The langauges I'm most familiar with are Java and C, but I've also
        worked with Python, Racket, HTML, CSS, and JavaScript (Other langauges
        include English, Mandarin Chinese and French). In terms of tools, I've
        worked with a couple! React, Node.js, Google Workspace/MS Office,
        MediBang, Asesprite, etc.
        <br />
        <br />
        <br />I hope to briefly summarize what I'm about and show you some of
        the projects I've been working on via this website!
      </p>
      <br />
      <p className={styles.specialabout}>
        <em>TL:DR: Press the button below ↓</em>
        <br></br>
        <Button path="Projects">Check my projects out here!</Button>
      </p>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
