import React from 'react'
import logo from '../images/logo1.png'
import "./Navbar.css"
// import Button from '../Button/Button';
import { Button } from '@material-ui/core'
function Navbar() {
    return (
        <div className='Navbar'>
            <img src={logo} className='logo' />
            <ul>
                <li>about</li>
                <li>skills</li>
                <li>services</li>
                <li>experience</li>
                <li>projects</li>
                <li>
                    <button className='Resume'>Resume</button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar