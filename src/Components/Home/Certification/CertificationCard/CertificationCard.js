import React from 'react'
import { Link } from 'react-router-dom'
// css
import classes from './CertificationCard.module.css'

const CertificationCard = (props) => {

  return (
    <Link to={props.link} target='_blank'>
        <div style={{ backgroundImage: `url(${props.img})`}} className={classes.box}>
      
        </div>
    </Link>
  )
}

export default CertificationCard
