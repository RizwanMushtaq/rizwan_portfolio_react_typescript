import React from 'react'
import { useParams } from 'react-router-dom'

import { projects } from './../assets/AllProjects'

const ProjectDetail:React.FC = () => {

    const params = useParams()
    const project = projects.find( project => project.projectId === params.id)

    return (
        <div>
            <h1>Project Detail</h1>
            <p>{project!.projectId}</p>
            <p>{project!.projectTitle}</p>
            <p>{project!.projectDescription}</p>
        </div>
    )
}

export default ProjectDetail
