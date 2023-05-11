import React from 'react'
import "./About.css";
import img from "../images/about.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function About() {
    return (

        <div className='about-text'>
            <h1><span>About</span> Melaku</h1>
            <p>My name is Melaku Alehegn and I'm a frontend software developer with expertise various phases of software development. I craft pixel-perfect user interfaces that
                bring ideas to life and solve real business problems.<br></br><br></br> I have worked with
                clients across various industries and developed a strong skill set in JavaScript, ReactJs, Python, Flask and DevOps.
                I'm passionate
                about helping businesses innovate and succeed through technology.
            </p>
            <ul className='social'>
                <li><a><GitHubIcon sx={{ fontSize: 40 }} outlined></GitHubIcon></a></li>
                <li><a><LinkedInIcon sx={{ fontSize: 40 }}></LinkedInIcon></a></li>
                <li><a><TwitterIcon sx={{ fontSize: 40 }}></TwitterIcon></a></li>
                <li><a><InstagramIcon sx={{ fontSize: 40 }}></InstagramIcon></a></li>
            </ul>
            {/* <img alt="about" className='about-img' src={img}></img> */}
        </div>

    )
}

export default About