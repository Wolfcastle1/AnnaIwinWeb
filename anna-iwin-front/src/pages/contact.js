import React from 'react';
import './contact.css';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

    tint: {
        backgroundColor: '#ffc6b5',

        // position: 'absolute',
        // top: '50%',
        // left: '50%',

    }

}));

function Contact() {

    const classes = useStyles();

    return (
        <div class="body">
            <h1>Contact Info</h1>
            <div class="gr">

                <div/>
                <div className={classes.tint}>

                    <p>Email: <a href="mailto:annaiwin@outlook.com">annaiwin@outlook.com</a></p>
                    <p>Instagram: <a href="https://www.instagram.com/anna.iwin.art/">@anna.iwin.art</a></p>

                </div>
                <div/>

            </div>
        </div>
    );
}

export default Contact;