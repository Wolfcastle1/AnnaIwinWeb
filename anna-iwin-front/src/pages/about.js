import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    image: {
        width: "500px",
        height: "500px  ",
    },  
    body: {
    },
    box1: {
        background: 'red',
        width: '200px',
        height: '100px',
        display: 'inline-block',
        
    },
    box2: {
        background: 'blue',
        width: '100px',
        height: '200px',
        display: 'inline-block'
    },
    box3: {
        background: 'green',
        width: '200px',
        height: '300px',
        display: 'inline-block'
    },
    box4: {
        background: 'purple',
        width: '100px',
        height: '100px',
        display: 'inline-block'
    },

}));


function About() {

    const classes = useStyles();


    return (
        <div className={classes.body}>
      

                <div className={classes.box1}></div>
                <div className={classes.box3}></div>
                <div className={classes.box2}></div>
                <div className={classes.box2}></div>
                <div className={classes.box2}></div>
                <div className={classes.box3}></div>
                <div className={classes.box1}></div>
                <div className={classes.box2}></div>
                <div className={classes.box1}></div>
                <div className={classes.box3}></div>
                <div className={classes.box1}></div>
                <div className={classes.box3}></div>
         
        </div>
    );
}

export default About;