import React, { useEffect }  from 'react'
// components
import CertificationCard from './CertificationCard/CertificationCard'
// CSS
import classes from './Certification.module.css';
// import images
import internshipCertificate from '../../../Assets/Certificates/InternshipCertificateHS.jpg'
import sihCertificate from "../../../Assets/Certificates/SIHCertificateHS.jpg";
import codepeakCertificate from "../../../Assets/Certificates/codepeakCertifiacteHS.jpg";
import rajasthanCertificate from "../../../Assets/Certificates/RajasthanITDayHackathonCertificateHS.jpg";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
const Certification = (props) => {
    useEffect(() => {
        AOS.init({
            delay: 100,
        });
    }, [])
    const data = [
      {
        img: internshipCertificate,
        link: "https://drive.google.com/file/d/1rHvl_i7Kvl1WhSIUjEwn2c3ossKDfnc5/view?usp=sharing",
      },
      {
        img: sihCertificate,
        link: "https://drive.google.com/file/d/1XWj6BKGSv59upjTkNVy9KZToG-2qkGAy/view?usp=sharing",
      },
      {
        img: codepeakCertificate,
        link: "https://drive.google.com/file/d/17e0CPP_BFotdyRAMwbFT4Za80UUcsU3f/view?usp=sharing",
      },
      {
        img: rajasthanCertificate,
        link: "https://drive.google.com/file/d/11jDOC4CyFO6TJY4pfwrITqaG3mIfG9fi/view?usp=sharing",
      },
    ];
    return (
        <div id={props.id} className={classes.section}>
            <div className={classes.heading}>
                Courses & Certifications
            </div>
            <div className={classes.container}>
            {
                data.map((data, key) => {
                    return (
                        <CertificationCard img={data.img} link={data.link} id={key} />
                    )
                })    
            }
            </div>
        </div>
    )
}

export default Certification
