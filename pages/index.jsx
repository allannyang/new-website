import React from "react";
import TopBar from "../components/TopBar";
import Button from "../components/Button";
import styles from "../styles/home.module.css";
import Typewriter from "typewriter-effect";
import SocialButton from "../components/SocialButton";

const home = () => {
  return (
    <div className={styles.home}>
      <h1>
        Hey, I&apos;m <em>Allan</em>.
      </h1>
      <h2>
        <Typewriter
          options={{
            strings: [
              "I'm a CS student",
              "I'm a BBA student, too",
              "I like long walks on the beach",
              "and getting hired for this job (please)",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 1500,
            wrapperClassName: "h2",
          }}
        />
      </h2>
      <Button path="About">About Me</Button>
      <div classname={styles.home}>
        <SocialButton path="https://www.linkedin.com/in/allannyang/">
          <img
            src="../LinkedInIcon.png"
            width="35px"
            length="35px"
            alt=""
          ></img>
        </SocialButton>
        <SocialButton path="https://github.com/allannyang">
          <img src="../GitHubIcon.png" width="35px" length="35px" alt=""></img>
        </SocialButton>
        <SocialButton path="">
          <img src="../MailIcon.png" width="35px" length="35px" alt=""></img>
        </SocialButton>
      </div>
    </div>
  );
};

export default home;
