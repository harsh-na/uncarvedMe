import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import classes from './PORCard.module.css'
import { Link } from 'react-router-dom'

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

const EducationCard = (props) => {
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
    <Card className={classes.outerCard}>
        <div className={classes.card}>
            <div className={classes.logo}>
                <Link to={props.link} target='_blank'> <img src={props.logo} alt="logo" /> </Link>
            </div>
            <div className={classes.description}>
                <div className={classes.heading}>
                    {props.org}   
                </div>
                <div className={classes.matter}>
                    {props.position}
                </div>
                <div className={classes.matter}>
                    {props.year}
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
                        return (<li key={key}><div dangerouslySetInnerHTML={{ __html: item }} /></li>)
                    })
                }
            </ul>   
        </Collapse>
      </Card>
  )
}

export default EducationCard
