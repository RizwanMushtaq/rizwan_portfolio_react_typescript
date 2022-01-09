import React from 'react'
import Styles from './Projects.module.scss'

import { NavLink } from 'react-router-dom'
import { projects } from './../assets/AllProjects'

const Projects: React.FC = () => {
    return (
        <div className={Styles.container}>
             
            <h1>Projects</h1>
            <ul>
                {
                    projects.map( (project) => {
                        return (
                            <li key={project.projectId}>
                                <NavLink to={`/projects/${project.projectId}`}>{project.projectId}</NavLink>
                                <p>{project.projectDescription}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Projects
