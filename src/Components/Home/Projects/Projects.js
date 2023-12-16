import React from 'react'
import classes from './Projects.module.css'
import ProjectCard from './ProjectCard/ProjectCard'

const data = [
  {
    title: "ChitChat",
    techStack: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
    brief: `Build a Full Stack Chatting application using <strong>socket.io</strong> technology to establish Full duplex connection`,
    description: [
      " Developed real-time chat app using <strong>MERN stack</strong> (MongoDB, Express JS, ReactJS, NodeJS).",
      " Utilized <strong>MongoDB</strong> for user profiles and chat messages storage.",
      " Implemented <strong>Express.js</strong> for RESTful APIs handling user authentication and messaging. Integrated Socket.io for WebSocket communication enabling instant messaging. Ensured secure data storage, seamless real-time updates, and efficient retrieval.",
    ],
    github: "https://github.com/harsh-na/Chit-Chat.git",
    website: "https://phenomenal-naiad-028871.netlify.app/",
    drive: null,
  },
  {
    title: "Bharat Yojna ",
    techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    brief:
      "This Project idea is taken in Smart India Hackathon and Rajasthan IT day Hackathon",
    description: [
      " Whenever a new scheme is launched by government a pop up notification will be send to the beneficiary.",
      " Our application filters out schemes according to their Unique Identification Number which is provided after profile completion.",
      "We Build this Project in a Team and Collaborate in an effective way",
    ],
    github: "https://github.com/kinsteve/Bharat-Yojana-Website-.git",
    website: "https://hackathon-kinsteve.vercel.app/",
    drive: null,
  },
  {
    title: "Cloud Computing Website",
    techStack: ["HTML", "CSS", "Javascript", "ReactJS", "MongoDB"],
    brief:
      "Official website for CloudComputing Cell of Ajay Kumar Garg Engineering College, Ghaziabad",
    description: [
      `Responsible for registering <strong>more than 1000 participants</strong> and conveying information about the fest`,
      "Revamped the <strong>Frontend (HTML/CSS/JavaScript)</strong> as well as <strong>Backend (MongoDB)</strong> for storing Data of registered users of various events",
      "Our Website got appraisal by Faculty Co-ordinators <strong> Asst. Prof Santosh Mishra and Dr. Veena Bharti</strong>",
    ],
    github: "https://github.com/tarupathak/CCC-Website",
    website: "https://ccc-website-delta.vercel.app/",
    drive: null,
  },
  {
    title: "Codepeak Website",
    techStack: ["ReactJS", "HTML", "CSS"],
    brief:
      "Official website for Codepeak (Open Source Program organised by IIT Patna in collaboration with IIT Guwahati)",
    description: [
      "Contributed to the website as a <strong>Contributor</strong> in Codepeak",
      "Website was responsible for the registration of <strong>more than 3000 participants</strong>",
      "Designed and coded several pages of the website from scratch. <strong>Fetched data from Gsheets to display on the leaderboard page and implemented a search bar for user convenience",
    ],
    github: "https://github.com/IITP-X-IITG/WoC-frontend",
    website: "https://www.codepeak.tech/",
    drive: null,
  },
];

const Projects = (props) => {
  return (
    <div className={classes.section} id={props.id}>
      <div className={classes.heading}>
        PROJECTS
      </div>
      <div className={classes.cards}>
        {
          data.map((item, key) => {
            return (
              <ProjectCard key={key} title={item.title} techStack={item.techStack} brief={item.brief} description={item.description} github={item.github} website={item.website} drive={item.drive} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects
