import React from "react";
import styles from "./About.module.css";

const About = (props) => {
    return(
        <div className={styles.about}>
            <h1>{props.text}</h1>
        </div>
    )
}

export default About;