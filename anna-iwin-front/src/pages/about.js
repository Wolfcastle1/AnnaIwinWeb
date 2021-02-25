import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

body: {
    width: '100vw',
    textAlign: 'center',
},  

para: { 
    padding: '2vw',
},

}));


function About() {

    const classes = useStyles();


    return (
        <div className={classes.body}>
      
        <h1>About Me</h1>

        <p className={classes.para}>
            Hi! My name is Anna Iwin, and I'm an aspiring
            illustrator currently in Savannah Georgia,
            originally from Schaumburg Illinois. Creating has 
            always been my passion, so I'm extremely excited to 
            have the opportunity to turn this passion into a 
            career. I'm presently studying illustration in 
            Savannah College of Art and Design.
        </p>

        <p className={classes.para}>
            I work with many different mediums including
            acrylic, gouache, watercolor, pencil, and marker. 
            But my main medium is digital art. I got my first 
            tablet when I was around ten years old, and never
            stopped creating digital art since. I started digitally
            illustrating using Paint Tool Sai for a few years, then
            experimented with Krita for a little until finding 
            Clip Studio Paint, which along with Photoshop is my 
            primary program.
        </p>

        <p className={classes.para}>
            I enjoy experimenting with bright colors, 
            fantasy like concepts, and everyday life moments.
            Creating characters and illustrating made up
            concepts is also something I really find joy in
            doing. I love to illustrate whatever makes me
            happy. I'm heavily inspired by nature and animals. 
            Anything I see during my day to day life may spark 
            an idea for a piece. That's one of my favorite things
            about being an artist; I can take any mundane moment
            and turn it into something beautiful. 
        </p>

         
        </div>
    );
}

export default About;