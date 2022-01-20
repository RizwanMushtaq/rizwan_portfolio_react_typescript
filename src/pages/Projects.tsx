import React from 'react'
import Styles from './Projects.module.scss'

import Card from '../components/Card'
import { NavLink } from 'react-router-dom'
import { projects } from './../assets/AllProjects'
import arrowIcon from '../assets/icons/Pfeilrechts.svg'

const Projects: React.FC = () => {
    return (
        <Card type={'projectsCard'}>
            <div className={Styles.container}>
                <div className={Styles.rightArrowContainer}>
                        <NavLink className={Styles.imgContainer} to={'/welcome'}>
                            <img src={arrowIcon} alt="arrowIcon" />
                        </NavLink>
                </div>
                <div className={Styles.allProjectsContainer}>
                    {
                        projects.map( (project) => {
                            return (
                                <Card key={project.id} type={'projectCard'}>
                                    <>
                                        <div className={Styles.titleContainer}>
                                            <p>{project.title}</p>
                                        </div>
                                        <div className={Styles.imageContainer}>
                                            <NavLink to={`/projects/${project.title}`}>
                                                <img src={project.pic} alt='logo'></img>
                                            </NavLink>
                                        </div>
                                        <div className={Styles.buttonContainer}>
                                            <button
                                                onClick={() => window.open(project.demoLink)}
                                            >Live Demo</button>
                                            <button
                                                onClick={() => window.open(project.codeLink)}
                                            >Code</button>
                                        </div>
                                    </>
                                </Card>
                            )
                        })
                    }
                </div>
                
            </div>
        </Card>
    )
}

export default Projects
