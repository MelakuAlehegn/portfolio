import React from 'react';
import "./Hero.css";
import Button from '../Button/Button';
import img from '../images/removed.png'

function Hero() {
    return (
        <div className='hero'>
            <div className='hero-name'>
                <div className='text'>
                    <span className='greeting'>✋ Hello, my name is </span><br></br><br></br><span className='name'>Melaku.<br></br>
                    </span><span className='role'>I am A Frontend Developer. </span><br></br>
                    <span className='hero-discription'> I specialize in crafting dynamic and responsive user interfaces that engage and delight. With a deep
                        understanding of the React library and a passion for creating seamless user experiences,
                        I have the skills and expertise needed to turn your vision into a reality.
                    </span>
                </div>
                <Button name="Get in touch" height='3.8rem' width='10rem' />
            </div>
            <img className='hero-image' src={img}></img>
        </div>
    )
}

export default Hero