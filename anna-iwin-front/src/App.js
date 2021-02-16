import React from 'react';
import './App.css';

// art

import About from './pages/about.js';
import Home from './pages/home.js';
import Commissions from './pages/commissions.js';
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


  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: '#fff2ec',
        top: '0px',
        width: 'auto',
        height: 'auto',
      }}
    >
      <ThemeProvider theme={theme}>
        <Router>

          {/* <Header /> */}
          <Switch>
            <Route exact path='/' component={Portfolio}></Route>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/about-me' component={About}></Route>
            <Route exact path='/commissions' component={Commissions}></Route>
            <Route exact path='/portfolio' component={Portfolio}></Route>

          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;