import React from 'react'
import { Link, Route } from 'react-router-dom'

const NavBar = (props) => {
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/certificates">Certificates</Link>
            <Link to="/about-me">AboutMe</Link>
            <Link to="/contact">Contact</Link>
        </>
    )
}

export default NavBar