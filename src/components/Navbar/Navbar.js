import React from 'react'
import logo from '../images/logo1.png'
import "./Navbar.css"
import Button from '../Button/Button';
// import { Button } from '@material-ui/core'
function Navbar() {
    return (
        <div className='Navbar'>
            <img alt='logo' src={logo} className='logo' />
            <ul>
                <li>about</li>
                <li>skills</li>
                <li>services</li>
                <li>experience</li>
                <li>projects</li>
                <li><Button name="Resume" /></li>
            </ul>
        </div>
    )
}

export default Navbar