import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/commons/NavBar'

import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Certificates from './components/Certificates'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

import 'materialize-css/dist/css/materialize.min.css'

function App() {
  return ( 
    <>
      <BrowserRouter>
      <NavBar/>
      <Route exact path='/'>
          <Home/>
        </Route>
      <Switch>
        <Route path='/portfolio'>
          <Portfolio/>
        </Route>
        <Route path='/certificates'>
          <Certificates/>
        </Route>
        <Route path='/about-me'>
          <AboutMe/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        
      </Switch>
      </BrowserRouter>

    </>
  )
}

export default App;
