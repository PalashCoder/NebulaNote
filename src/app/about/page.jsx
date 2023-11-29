import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Story Of Me</h1>
          <h2 className={styles.imgDesc}>
            An Aspiring FullStack Developer
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who am I?</h1>
          <p className={styles.desc}>
            I am a passionate and self-taught Full-Stack Developer residing in Krishnagar, West Bengal, India. At the age of 20, I have dedicated myself to the exciting world of Web Development and have embarked on a journey of constant learning and growth.
            <br /><br />
            From a young age, I was fascinated by technology and its ability to shape the world around us. This curiosity led me to explore programming and Web Development, where I quickly discovered my knack for creating dynamic and user-friendly applications.
            <br /><br />
            As a Full-Stack Developer, I possess a diverse skill set that allows me to handle both the Frontend and Backend with Database aspects of Web Development.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What do I Do?</h1>
          <p className={styles.desc}>
            I made projects to enlarge my knowlegde in the technology and to learn new things.<br/>
            Currently an intern and the web dev lead.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="https://iamrealpalash.netlify.app/" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
