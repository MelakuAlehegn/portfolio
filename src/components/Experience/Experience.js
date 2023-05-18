import React, { useState } from 'react';
import './Experience.css'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
function Experience() {
    const experiences = [
        {
            company: 'NERD',
            // image: exp1,
            title: "Computer Programmer @ NERD Center",
            content: ['Spent over a month researching about Scara Robots their behaviour.', 'Implemented a design change for the existing robot to maximize efficiency.', 'Write code to meet the design requirements using C++ programming langueage.', 'Wrote recommendations and design improvement suggestions for future interns.'],
            period: 'April 2021 - July 2021',
            skills: ['Research', 'C++', 'Algorithms/DSA'],

        },
        {
            company: 'LSSYA',
            // image: exp2,
            title: "Frontend Developer @ LSSYA",
            content: ['Designed and planned wireframes and sitemaps using feedback from users.', 'Built a landing page for an online counselling chat app', 'Used React.js as A frontend Framework', 'Designed components with tailwindcss'],
            period: 'November 2021 - February 2022',
            skills: ['CSS', 'TailwindCSS', 'ReactJs', 'Responsive design'],

        },
        {
            company: 'Kemer',
            // image: exp3,
            title: "DevOps @ Kemer Habesha",
            content: ['Configure linux servers using config mgmt tools.', 'Configured CI/CD pipelines', 'Set up a monitoring and alert tool to watch for specific scenarios and report', 'Set up and configure a SQL server with a replica as a backup.'],
            period: 'October 2022 - Present',
            skills: ['AWS', 'Docker', 'Github Actions', 'Ansible', 'CI/CD'],

        },
        {
            company: 'BloomTech',
            // image: exp4,
            title: "Frontend Developer @ BloomTech Software",
            content: ['Improve Requirements of Software', 'Design/Develop Web interfaces with ReactJs', 'Rewrote HTML/CSS to meet Responsive Design and SEO standards', 'Collaborate with four other team members to improve user-facing features'],
            period: 'January 2022 - Present',
            skills: ['ReactJs', 'CSS', 'Bootstrap', 'Responsive Design'],

        },
    ]
    const [activeIndex, setIndex] = useState(0)
    const handleClick = (index) => {
        setIndex(index)
    }
    return (

        <div className='work-experience'>
            <h1 className='experience-title'>Work Experience</h1>
            <div className='experiences'>
                <div className='experience'>
                    <div className='nav'>
                        {
                            experiences.map((exp, index) => (
                                <div key={index}
                                    className={`nav-items ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => handleClick(index)}
                                >
                                    {exp.company}
                                    <div className="line"></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='exp-content'>
                    <h2 className='title'>{experiences[activeIndex].title}</h2>
                    <h5 className='period'>{experiences[activeIndex].period}</h5>
                    <ul className='experience-content'>
                        {
                            experiences[activeIndex].content.map((contents) => (
                                <div>
                                    <li><CircleOutlinedIcon
                                        sx={{ fontSize: 'small', marginRight: '10px', color: 'var(--color-secondary)' }} />
                                        {contents}
                                    </li>
                                </div>
                            ))
                        }
                    </ul>
                    <ul className='experience-skills'>
                        {
                            experiences[activeIndex].skills.map((skill) => (
                                <li>{skill}</li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default Experience