import { Typography } from '@material-ui/core';
import { Copyright, Instagram, LinkedIn, Mail } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

function Footer(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.copyRightContainer}>
                <Copyright className={classes.logo}/>
                <Typography variant='subtitle1'> 2021 - Shiv Bhonde</Typography>
            </div>
            <a href="https://www.instagram.com/shiv_bhonde/" className={classes.link}>
                <Instagram />
            </a>
            <a href="https://www.linkedin.com/in/shiv-bhonde-b23a1a205/" className={classes.link}>
                <LinkedIn />
            </a>
            
            <a href="mailto:shivbhonde04@gmail.com" className={classes.link}>
                <Mail />
            </a>
           
        </div>
    );
}

export default Footer;