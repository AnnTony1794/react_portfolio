import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/commons/NavBar'
import Footer from './components/commons/Footer'

import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Certificates from './components/Certificates'
import Blog from './components/Blog'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

import 'materialize-css/dist/css/materialize.min.css'

function App() {
  return ( 
    <>
      <BrowserRouter>   
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/portfolio'>
          <Portfolio/>
        </Route>
        <Route path='/certificates'>
          <Certificates/>
        </Route>
        <Route path='/blog'>
          <Blog/>
        </Route>
        <Route path='/about-me'>
          <AboutMe/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
