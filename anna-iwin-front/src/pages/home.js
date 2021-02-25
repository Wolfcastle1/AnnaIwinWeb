import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    body: {
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        
    },

    pad: {
        padding: '2%',
    },

}));


function Home() {

    const classes = useStyles();

    return (
        <div className={classes.body}>
            <h1>
                Hello!
            </h1>

            <p className={classes.pad}>*image of logo type thing*</p>


            <h4 className={classes.pad}>Welcome to my Personal Illustration Website</h4>
            <p className={classes.pad}>
                Here you can take a look through my portfolio and see some of the
                peices I have done.
            </p >
            <p className={classes.pad}>
                Or you can click "about me" and learn about me and what I do
            </p>
        </div>
    );
}

export default Home;