import React from 'react'
import { useParams } from 'react-router-dom'
import Styles from './ProjectDetail.module.scss'
import { NavLink } from 'react-router-dom'

import Card from '../components/Card'
import { projects } from './../assets/AllProjects'

import arrowIcon from '../assets/icons/Pfeilrechts.svg'

const ProjectDetail:React.FC = () => {

    const params = useParams()
    const project = projects.find( project => project.title === params.title)

    return (
        <Card type={'projectDetailCard'}>
            <div className={Styles.container}>
                <div className={Styles.rightArrowContainer}>
                    <div className={Styles.rightArrowContainerInner}>
                        <NavLink className={Styles.imgContainer} to={'/projects'}>
                            <img src={arrowIcon} alt="arrowIcon" />
                        </NavLink>
                    </div>  
                </div>

                <div className={Styles.projectDetailsContainer}>
                    <h1>{project!.title}</h1>
                    <div className={Styles.projectBody}>
                        <div className={Styles.projectCard}>
                            <div className={Styles.imgContainer}>
                                <img src={project!.pic} alt='project-pic'></img>
                            </div>
                            <div className={Styles.buttonsContainer}>
                                <button
                                    onClick={() => window.open(project!.demoLink)}
                                >Live Demo</button>
                                <button
                                    onClick={() => window.open(project!.codeLink)}
                                >Code</button>
                            </div>
                        </div>
                        <div className={Styles.projectTechnologies}>
                            <p>Tech Stack Used:</p>
                            <ul>
                                {
                                    project!.description.technologies.map( (item) => (
                                        <li>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.projectFunctionality}>
                        <p>Project Features:</p>
                        <ul>
                            {
                                project!.description.features.map( (item) => (
                                    <li>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </Card>
        
    )
}

export default ProjectDetail
