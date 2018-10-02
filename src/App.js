import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './containers/Pages/Home';
import About from './containers/Pages/About';
import What from './containers/Pages/What';
import Episodes from './containers/Pages/Episodes';
import Episode from './containers/Pages/Episode';
import Contact from './containers/Pages/Contact';

import Wrapper from './hoc/wrapper';
import './App.css';

class App extends Component {
  render() {
    return (
        <Wrapper>
            <Navigation class='navbar navbar-lg navbar-dark fixed-top'  />
            <Switch>
              <Route path="/Episodes" component={Episodes} />
              <Route path="/About" component={About} />
              <Route path="/What" component={What} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Episode" component={Episode} />
              <Route path="/" exact component={Home} />
            </Switch>
            <Footer class='footer' />
        </Wrapper>

    ) 
  }
}

export default App;
