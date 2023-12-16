import React from 'react'
import classes from './SkillCard.module.css'
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';

const SkillCard = (props) => {
  
  return (
    <div className={classes.card} style={{flexDirection: props.id%2===0 ? 'row':'row-reverse'}} data-aos={props.id%2===0 ? "fade-right":"fade-left"} >
        <div className={classes.heading}>
          {props.heading}
        </div>
        <div className={classes.icons}>
          {
            props.icons.map((icon, key) => {
              return (

                <Tooltip title={icon.name} placement='top' key={key}>
                  {icon.link.length === 0 ? <span>{icon.logo}</span>:
                    <Link to={icon.link} target='_blank'>
                    {icon.logo}
                    </Link>
                  }
                </Tooltip>
              )
            })
          }
        </div>
    </div>
  )
}

export default SkillCard
