import React, {useEffect} from 'react'
import classes from './EducationCard.module.css'
import { Link } from 'react-router-dom'
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
const EducationCard = (props) => {
    useEffect(() => {
        AOS.init({
            delay: 100,
        });
    }, [])
  return (
    <div className={classes.card} data-aos="fade-up">
        <div className={classes.logo}>
            <Link to={props.link} target='_blank'> <img src={props.logo} alt="logo" /> </Link>
        </div>
        <div className={classes.description}>
            <div className={classes.heading}>
                {props.school}   
            </div>
            <div className={classes.matter}>
                {props.degree}
            </div>
            <div className={classes.matter}>
                {props.result}
            </div>
            <div className={classes.matter}>
                {props.year}
            </div>
        </div>
    </div>
  )
}

export default EducationCard
