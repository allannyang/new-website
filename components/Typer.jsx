import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from '../styles/typer.module.css';

const Typer = () => {
    return (
    <div className={styles.typer}>
        <Typewriter onInit={(typewriter) => {
            typewriter
            .typeString("I'm a")
            .pauseFor(2250)
            .deleteAll()
            .typeString("I'm a CS Student")
            .pauseFor(2250)
            .deleteAll()
            .start();
        }}
        />
    </div>
    );
};

export default Typer;