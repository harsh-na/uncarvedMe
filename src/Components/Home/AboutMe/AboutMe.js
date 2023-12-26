import React, { useEffect } from 'react'
import classes from './AboutMe.module.css';
import { TypeAnimation } from 'react-type-animation';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import {FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutMe = (props) => {
  const socialMedia = [
    {
      name: "LinkedIn",
      logo: <BsLinkedin />,
      link: "https://www.linkedin.com/in/harshit-saxena-3365b11ba/",
    },
    {
      name: "Github",
      logo: <BsGithub />,
      link: "https://github.com/harsh-na",
    },
    {
      name: "Gmail",
      logo: <SiGmail />,
      link: "mailto:harshitgalaxy710@gmail.com",
    },
    {
      name: "Twitter",
      logo: <FaTwitter />,
      link: "https://twitter.com/harshit_galaxy",
    },
  ];
  const resumeLink =
    "https://drive.google.com/file/d/1_tTW5Q0iBOQZ_fYse6nFSLZGszABrgZ2/view?usp=sharing";
  useEffect(() => {
    AOS.init({delay: 100,});
  }, [])
  return (
    <div className={classes.section} id={props.id}>
      <div className={classes.heading}>
        <span>Hey Guys, I'm</span>
        <span>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              `Harshit Saxena`,
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Software Engineer",
              1000,
              "Web Developer",
              1000,
              "Blockchain Enthusiast",
              1000,
              "Believes in 51%",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "3vw",
              fontWeight: "500",
              display: "block",
              fontFamily: "Poppins, sans-serif",
              color: "whitesmoke",
            }}
            repeat={Infinity}
            className={classes.typing}
          />
        </span>
        <div className={classes.socialContainer}>
          {socialMedia.map((item, index) => {
            return (
              <Link to={item.link} className={classes.logo} target="_blank">
                {item.logo}
              </Link>
            );
          })}
        </div>
      </div>

      <div className={classes.rightContainer} data-aos="fade-left">
        <p>
          I'm Harshit Saxena, a graduate from AKGEC, Ghaziabad in B.Tech
          Computer Science and Information Technology. Hailing from Kanpur, I
          have completed high school and intermediate here and have a strong
          passion for exploring and building Technologies. Along with my
          studies, I've interned as Backend Developer at Srl Life. Furthermore,
          I am the Head co-ordinator of Cloud Computing Cell and actively
          contributed to Events and Workshops like SPOCC, PyWizardry and many
          more. Additionally, I am also the finalist in Smart India Hackathon
          and Rajasthan IT-day Hackathon. Currently searching for any Full Time
          opportunity as a Software Developer, I'm eager to know more about the
          Tech World.
        </p>
        {/* <p>I'm Harshit Saxena, a graduate from AKGEC, Ghaziabad in B.Tech Computer Science and Information Technology. Hailing from Kanpur, I have completed high school and intermediate here and have a strong passion for exploring and building Technologies. Along with my studies, I've interned as Backend Developer at Srl Life. Furthermore, I am the Head co-ordinator of Cloud Computing Cell and actively contributed to Events and Workshops like SPOCC, PyWizardry and many more. Additionally, I am also the finalist in Smart India Hackathon and Rajasthan IT-day Hackathon. Currently searching for any Full Time opportunity as a Software Developer, I'm eager to know more about the Tech World.</p> */}
        <Link to={resumeLink} target="_blank">
          <Button variant="outlined" classes={{ root: classes.resumeButton }}>
            View my Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AboutMe
