import React from 'react'
import { NavLink } from 'react-router-dom'
import M from "materialize-css";


const PrintLi = () => ( 
    <>
    <li>
        <NavLink exact to='/' activeClassName="#004d40 teal darken-4 z">Home</NavLink>
    </li>
    <li>
        <NavLink to='/portfolio' activeClassName="#004d40 teal darken-4">Portfolio</NavLink>
    </li>
    <li>
        <NavLink to='/certificates' activeClassName="#004d40 teal darken-4">Certificates</NavLink>
    </li>
    <li>
        <NavLink to='/blog' activeClassName="#004d40 teal darken-4">Blog</NavLink>
    </li>
    <li>
        <NavLink to='/about-me' activeClassName="#004d40 teal darken-4">AboutMe</NavLink>
    </li>
    <li>
        <NavLink to='/contact' activeClassName="#004d40 teal darken-4">Contact</NavLink>
    </li>
    </>
)

const NavBar = () => {
        return(
            <nav className="#26a69a teal lighten-1">

                <div className="container">
                    <a href="#" className="brand-logo">AnnTony</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="large material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <PrintLi/>
                    </ul>               
                </div>
                <ul className="sidenav sidenav-close" id="mobile-demo">
                    <PrintLi/>
                </ul>

            </nav>
        )
    }

export default NavBar