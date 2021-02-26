import React from 'react';
import './home.css'

import { makeStyles } from '@material-ui/core/styles';

import logo from '../art/logo_with_circle.png'



const useStyles = makeStyles((theme) => ({
    
    body: {
        width: '100vw',
        textAlign: 'center',
        backgroundColor: '#fff2ec',
    },

    pad: {
        padding: '0px',
    },

    image: {
        width: '50vw',
    },

}));


function Home() {

    const classes = useStyles();

    return (
        <div className={classes.body}>
            
            <h1>
                Hello!
            </h1>
            
            <img class='image' src={logo} alt="logo"/>

            <h4 className={classes.pad}>Welcome to my Personal Illustration Website</h4>
            <p className={classes.pad}>
                Here you can take a look through my portfolio and see some of the
                peices I have done.
            </p >
            <p className={classes.pad}>
                Or you can click "about me" and learn more about me and what I do
            </p>
        </div>
    );
}

export default Home;