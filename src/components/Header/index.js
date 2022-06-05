import React from 'react'
import "./Header.scss"
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className='main-header'>
            <div className='header'>
                <h2><NavLink to="/">REACT ROUTING</NavLink></h2>
                <div className='lists'>
                    <ul>
                        <li><NavLink activeClassName='active' to='/'>Home</NavLink></li>
                        <li><NavLink activeClassName='active' to='/services'>Services</NavLink></li>
                        <li><NavLink activeClassName='active' to='/about'>About</NavLink> </li>
                        <li><NavLink activeClassName='active' to='/portfolio'>Portfolio</NavLink> </li>
                        <li><NavLink activeClassName='active' to='/contact'> Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;