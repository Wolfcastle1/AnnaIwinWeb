import React from 'react';
import clsx from 'clsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


// Icons
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// Routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Header.css';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
        //flexGrow: 1,
        
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1, 
        textDecoration: 'none', 
        color: 'teal',
        //fontSize: '4vw'
    },
    button: {
        textDecoration: 'none',
        
    }


}));


const theme = createMuiTheme({

    MuiButton: {
        raisedPrimary: {
            color: 'black',
        },
    },

})


export default function Header() {

    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    return (

        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>

                        <Typography variant="h6" className={classes.title} color="textSecondary">
                            <Link to="/" className={classes.title}>
                                Anna Iwin Art
                            </Link>
                        </Typography>

                        <Link to="/portfolio" className={classes.button} style={{ textDecoration: 'none' }}>
                            <Button color="black">Portfolio</Button>
                        </Link>

                        <Link to="/commissions" className={classes.button} style={{ textDecoration: 'none' }}>
                            <Button color="black">Commissions</Button>
                        </Link>

                        <Link to="/original-prints" className={classes.button} style={{ textDecoration: 'none' }}>
                            <Button color="black" >Original Prints</Button>
                        </Link>

                        <Link to="/contact" className={classes.button} style={{ textDecoration: 'none' }}>
                            <Button color="black">Contact</Button>
                        </Link>

                        <Link to="/about-me" className={classes.button} style={{ textDecoration: 'none' }}>
                            <Button color="black">About Me</Button>
                        </Link>

                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}