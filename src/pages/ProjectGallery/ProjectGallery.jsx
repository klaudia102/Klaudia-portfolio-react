import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProjectGallery.css'
import Project from '../../components/Project/Project';

const projects = [
    {
        "title": "Wordsmith",
        "deploy": "https://klaudia102.github.io/WordSmith/",
        "repo": "https://github.com/klaudia102/WordSmith",
        "screenshot": "./wordsmith.PNG",
    },
    {
        "title": "Team Profile Generator",
        "deploy": "https://klaudia102.github.io/Team-Profile-Generator/",
        "repo": "https://github.com/klaudia102/Team-Profile-Generator",
        "screenshot": "./team-profile-generator.png",
    },
    {
        "title": "Generate ReadMe.md",
        "deploy": "https://klaudia102.github.io/Team-Profile-Generator/",
        "repo": "https://github.com/klaudia102/generatorREADME.md",
        "screenshot": './generate Readme.md.png',
    },
    {
        "title": "password-generator",
        "deploy": "https://klaudia102.github.io/password-generator/",
        "repo": "https://github.com/klaudia102/password-generator",
        "screenshot": "./password-generator.png",
    },
    {
        "title": "Klaudia-portfolio",
        "deploy": "https://klaudia102.github.io/Klaudia-portfolio/",
        "repo": "https://github.com/klaudia102/Klaudia-portfolio",
        "screenshot": './Klaudia-portfolio.png',
    },
    {
        "title": "Bootstrap-portfolio",
        "deploy": "https://klaudia102.github.io/Bootstrap-Portfolio/",
        "repo": "https://github.com/klaudia102/Bootstrap-Portfolio",
        "screenshot": "./Bootstrap-Portfolio.png",
    }
]

function ProjectGallery() {
    return (
        <>
            <div className='container-gallery'>
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">My projects</h1>
                    <h2>Would you like to see your dream website here...?</h2>
                </div>
                <div className='gallery-space'>
                    {projects.map((item) => {
                        return (
                            <Project key={item.title} title={item.title} deploy={item.deploy} repo={item.repo} screenshot={item.screenshot} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ProjectGallery;
