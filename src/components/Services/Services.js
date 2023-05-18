import React from 'react';
import './Services.css'
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
function Services() {
    const services = [
        {
            name: 'web-development',
            icon: <CodeIcon sx={{ fontSize: '50px' }} />,
            header: "Frontend Development",
            content: "Web Development, Frontend Development, ReactJs, Web App"
        },
        {
            name: 'ui-design',
            icon: <DesignServicesIcon sx={{ fontSize: '50px' }} />,
            header: "UI/UX Design",
            content: "UI/UX Design, Product Design, Requirement Analysis"
        },
        {
            name: 'Deploy',
            icon: <StorageIcon sx={{ fontSize: '50px' }} />,
            header: "Deployment",
            content: "CI/CD pipelines, DevOps, AWS"
        },
        {
            name: 'api',
            icon: <ApiIcon sx={{ fontSize: '50px' }} />,
            header: "Api Integration",
            content: "Api Development, Backend Development, Database Design"
        },

    ]
    return (
        <div className='services'>
            <h1>What I can offer</h1>
            <div className='service-card'>
                {
                    services.map((service) => (
                        <div className='service'>
                            <div className='service-icon'>{service.icon}</div>
                            <h2 className='service-header'>{service.header}</h2>
                            <p className='service-disc'>{service.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services