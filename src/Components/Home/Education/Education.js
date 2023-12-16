import React from 'react'
import classes from './Education.module.css'
import EducationCard from './EducationCard/EducationCard'
import AKGECLogo from '../../../Assets/Logos/AKGECLogoHS.png'
import UPKSSVLogo from '../../../Assets/Logos/UPKSSVLogoHS.jpeg'
const data = [
  {
    logo: AKGECLogo,
    link: "https://www.akgec.ac.in/",
    school: "Ajay Kumar Garg Engineering College, Ghaziabad",
    degree: "B.Tech. Computer Science and Information Technology",
    result: "7.7 (upto 6th semester)",
    year: "2024",
  },
  {
    logo: UPKSSVLogo,
    link: "https://www.icbse.com/schools/u-p-kirana-seva-samiti-vidyalaya-gvy9gl/",
    school: "U.P Kirana Seva Samiti Vidyalaya",
    degree: "CISCE Intermediate",
    result: "80.33%",
    year: "2019",
  },
  {
    logo: UPKSSVLogo,
    link: "https://www.icbse.com/schools/u-p-kirana-seva-samiti-vidyalaya-gvy9gl",

    school: "U.P Kirana Seva Samiti Vidyalaya",
    degree: "CISCE High School",
    result: "84.66%",
    year: "2017",
  },
];

const Education = (props) => {
  return (
    <div className={classes.section} id={props.id}>
      
      <div className={classes.heading}>
        <span>STUDY &nbsp;</span>
        <span>ABODE</span>
      </div>
      <div className={classes.cards}>
        {
          data.map((item, key) => {
            return (
              <EducationCard key={key} link={item.link} logo={item.logo} school={item.school} degree={item.degree} year={item.year} result={item.result}  />
            )
          })
        }
      </div>
    </div>
  )
}

export default Education
