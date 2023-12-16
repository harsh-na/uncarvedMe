import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from './ProjectCard.module.css'
import { Link } from 'react-router-dom';

// Icons
import { SiGithub, SiGoogledrive } from 'react-icons/si';
import { BiLinkExternal } from 'react-icons/bi'

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExperienceCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    AOS.init({
      delay: 100,
      once: true,
    });
  })
  return (
      <Card className={classes.outerCard} style={{borderLeft:`0.25rem solid ${props.color}`}} data-aos="fade-up" >
        <div className={classes.card}>

            <div className={classes.description}>
                <div className={classes.heading}>{props.title}</div>
          
                <div className={`${classes.techUsed} ${classes.matter}`}>
                    {props.techStack.map((item, key) => {
                        return(<p className={classes.tech} key={key}>{item}</p>)                   
                    })}
                </div>
                <div className={`${classes.matter} ${classes.expand}`}>
                  <p><div dangerouslySetInnerHTML={{__html: props.brief}}/></p>
          </div>
          <div className={classes.resources}>
                {props.website !== null &&
                  <Link to={props.website} target='_blank'>
                    <BiLinkExternal/>
                  </Link>
                }
                {props.github !== null &&
                  <Link to={props.github} target='_blank'>
                    <SiGithub/>
                  </Link>
                }
                
                {props.drive !== null && 
                  <Link to={props.drive} target='_blank'>
                    <SiGoogledrive/>
                  </Link>
                }
                </div>
            </div>
            {props.description.length > 0 && <CardActions className={classes.cardActions}>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                
            >
                <ExpandMoreIcon />
            </ExpandMore>
            </CardActions>}  
        </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <ul className={classes.details}>
          {
              props.description.map((item, key) => {
                  return(<li key={key}>< div dangerouslySetInnerHTML={{__html: item}} /></li>)
              })
          }
        </ul>   
        </Collapse>
    </Card>
  );
}

export default ExperienceCard;
