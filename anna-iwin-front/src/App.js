import React from 'react';
import './App.css';

import Button from '@material-ui/core/Button';


import About from './pages/about.js';
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import Portfolio from './pages/portfolio.js';

//custom themes
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';



// Routing Elements
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  button: {
    margin: '1%',
  },

}));


//My Custom Theme
const theme = createMuiTheme({
  palette: {

    primary: {

      main: '#ffc6b5'

    },

    secondary: {
      main: '#fff2ec'
    }
  },

  typography: {
    allVariants: {
      color: "black"
    },
  },
});

function App() {

  const classes = useStyles();


  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: '#fff2ec',
        top: '0px',
        width: 'auto',
        height: '100vh',
      }}
    >
      <ThemeProvider theme={theme}>
        <Router>

          {/* <Header /> */}
          <div class="head">
            <Button className={classes.button} variant="contained" color="primary" href="/">Home</Button>
            <Button className={classes.button} variant="contained" color="primary" href="/about-me">about</Button>
            <Button className={classes.button} variant="contained" color="primary" href="/portfolio">portfolio</Button>
            <Button className={classes.button} variant="contained" color="primary" href="/contact">Contact</Button>
          </div>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about-me' component={About}></Route>
            <Route exact path='/portfolio' component={Portfolio}></Route>
            <Route exact path='/contact' component={Contact}></Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;