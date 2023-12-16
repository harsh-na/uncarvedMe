import React from 'react'
import classes from './Experience.module.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import SrlLifeLogo from '../../../Assets/Logos/SrlLifeLogoHS.png'
import CCCLogo from '../../../Assets/Logos/CCCLogoHS.png'
const data = [
  {
    logo: SrlLifeLogo,
    link: "https://srldrugs.com/",
    org: "SrlLife",
    role: "Backend Developer",
    duration: "(Feb 2023- April 2023)",
    tech: ["NodeJS", "ReactJS", "ExpressJS", "MongoDB"],
    description: [
      "Performed <strong>API Testing and Analysis</strong> to detect the Bugs and issues using  <strong>Postman and ThunderClient</strong>",
      "Devised strategies to minimize <strong>Runtime</strong> activities of backend code using <strong>ExpressJS </strong> and other frameworks leading to reduction in <strong>Throughput Time</strong>",
      "Implemented <strong>MongoDB Atlas and Compass</strong> for storing and retrieving data",
      "Worked with various services like Nodemailer, Cloudinary and implemented <strong>Hashing</strong> to store private data in encrypted form.",
    ],
    color: "green",
    brief:
      "Developed server-side logic and RESTful APIs, ensuring seamless integration with the front-end,for a responsive web application. Worked on database like MongoDB and MySQL.",
  },
  {
    logo: CCCLogo,
    org: "Cloud Computing Cell",
    link: "https://ccc-website-delta.vercel.app/",
    role: "Head Co-ordinator and Full Stack Web Developer",
    duration: "(Oct 2021 - Present)",
    tech: [
      "HTML",
      "JavaScript",
      "CSS",
      "NodeJS",
      "ReactJS",
      "ExpressJS",
      "MongoDB",
    ],
    description: [
      "Contributed in <strong>Cloud Computing Website</strong> as a <strong>Full Stack Web Developer</strong>.",
      "Conducted various events and Workshops on <strong>Git/Github</strong>, <strong>EC2 enstance creation</strong> on <strong>AWS</strong> along with Load Balancing",
      "Learned various Professional Skills like <strong>Public Speaking</strong>, <strong>Working in Team</strong> and act as a Team Player",
    ],
    color: "black",
    brief:
      "It's a Technical society of AKGEC aiming to work on Cloud Computing along with various Domains and open source frameworks like Git/Github"
  },
];

const Experience = (props) => {
  return (
    <div className={classes.section} id={props.id}>
      <div className={classes.heading}>
        <span>GIG &nbsp;</span>
        <span>QUEST</span>
      </div>
      <div className={classes.cards}>
        {
          data.map((item, key) => {
            return (
              <ExperienceCard key={key} brief={item.brief} link={item.link} logo={item.logo} org={item.org} duration={item.duration} role={item.role} tech={item.tech} description={item.description} color={item.color} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Experience
