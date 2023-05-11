import React from 'react';
import "./Skills.css"
import ReactLogo from '../images/reactjs.png';
import PythonLogo from '../images/python.png';
import AwsLogo from '../images/aws.png';
import CssLogo from '../images/css.png';
import TailwindCss from '../images/tailwind.png';
import DockerLogo from '../images/docker.png';
import BootstrapLogo from '../images/bootstrap4.png';
import FlaskLogo from '../images/flask.png';
import MySqlLogo from '../images/mysql.png';
import JsLogo from '../images/js.png'
import HtmlLogo from '../images/html.png'

function Skills() {
    const techs = [
        {
            name: 'html',
            logo: HtmlLogo
        },
        {
            name: 'css',
            logo: CssLogo
        },
        {
            name: 'tailwind',
            logo: TailwindCss
        },
        {
            name: 'bootsrap',
            logo: BootstrapLogo
        },
        {
            name: 'javascript',
            logo: JsLogo
        },
        {
            name: 'react',
            logo: ReactLogo
        },
        {
            name: 'python',
            logo: PythonLogo
        },
        {
            name: 'aws',
            logo: AwsLogo
        },

        {
            name: 'docker',
            logo: DockerLogo
        },
        {
            name: 'flask',
            logo: FlaskLogo
        },
        {
            name: 'mysql',
            logo: MySqlLogo
        },


    ]
    return (
        <div className='skills'>
            <h1 className='skills-header'>Skills</h1>
            <p className='skills-discription'>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.</p>
            <div className='tech-stack'>

                {
                    techs.map((tech) => (
                        <div key={tech} className='tech-logo'>
                            <img alt='logo' src={tech.logo}></img>
                            <p>{tech.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills