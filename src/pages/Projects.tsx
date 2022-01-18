import React from 'react'

import Card from '../components/Card'
import { NavLink } from 'react-router-dom'
import { projects } from './../assets/AllProjects'

const Projects: React.FC = () => {
    return (
        <Card type={'projectsCard'}>
            <>
                {
                    projects.map( (project) => {
                        return (
                            <Card key={project.projectId} type={'projectCard'}>
                                <>
                                    <NavLink to={`/projects/${project.projectId}`}>{project.projectId}</NavLink>
                                    <p>{project.projectDescription}</p>
                                </>
                            </Card>
                        )
                    })
                }
            </>
        </Card>
    )
}

export default Projects
