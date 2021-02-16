import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ComForm from '../components/ComForm.js';
import ComInfo from '../components/ComInfo.js'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', 
        flexWrap: 'wrap',
        margin: '20px',
        '& > *': {
            margin: theme.spacing(1),
            
        },
        
    },

}));

function Commissions() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        
            <ComInfo/>

            <ComForm/>

        </div>
    );
}

export default Commissions;