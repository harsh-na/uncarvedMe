import React from 'react'
import classes from './POR.module.css'
import PORCard from './PORCard/PORCard'
import SIHTrophy from "../../../Assets/Logos/SIHTrophyHS.jpeg";
import CCCLogo from '../../../Assets/Logos/CCCLogoHS.png'
import CodePeakLogo from "../../../Assets/Logos/CodePeakLogoHS.png";

const data = [
  {
    logo: SIHTrophy,
    link: "https://www.sih.gov.in/",
    org: "Smart India Hackathon",
    position: "Finalist",
    year: "Aug' 2022",
    description: [
      "<strong>Problem Description</strong>",
      "In existing scenario, the approach followed for beneficiary’s selection for various schemes istop down.",
      " All <strong>rural development programs/schemes</strong> aim at extending maximum benefits to rural poor. Assessment of eligibility is done by various officials assigned at Centre/States etc.",
      " A system is needed wherethe beneficiary can get selected into schemes and offer himself to tracked using <strong>unique identifier.</strong> ",
    ],
  },
  {
    logo: CCCLogo,
    link: "https://ccc-website-delta.vercel.app/",
    org: "Cloud Computing Cell",
    position: "Head Co-ordinator",
    year: "October 2021- Present",
    description: [
      "It's a Technical society of AKGEC aiming to work on Cloud Computing along with various Domains and open source frameworks like Git/Github",
      "Contributed in <strong>Cloud Computing Website</strong> as a <strong>Full Stack Web Developer</strong>.",
      "Conducted various events and Workshops on <strong>Git/Github</strong>, <strong>EC2 enstance creation</strong> on <strong>AWS</strong> along with Load Balancing",
      "Learned various Professional Skills like <strong>Public Speaking</strong>, <strong>Working in Team</strong> and act as a Team Player",
    ],
  },
  {
    logo: CodePeakLogo,
    link: "https://www.codepeak.tech/",
    org: "CodePeak",
    position: "Open Source Contributor",
    year: "December 2022",
    description: [
      "Its a <strong>OpenSource Programme</strong> conducted by <strong>IIT-Patna and IIT- Guwahati</strong>",
      "I contibuted to <strong>Clueless</strong> website of IIT-Patna",
    ],
  },
];

const POR = (props) => {
  return (
    <div className={classes.section} id={props.id}>
      <div className={classes.heading}>
        <div>H<span>ONOURS</span></div>
        <div>A<span>ND</span></div>
        <div>R<span>EWARDS</span></div>
      </div>
      <div className={classes.cards}>
        {
          data.map((item, key) => {
            return (
              <PORCard key={key} link={item.link} logo={item.logo} org={item.org} position={item.position} year={item.year} description={item.description} />
            )
          })
        }
      </div>
    </div>
  )
}

export default POR
