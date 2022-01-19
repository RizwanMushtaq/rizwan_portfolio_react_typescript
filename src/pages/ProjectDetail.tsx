import React from 'react'
import { useParams } from 'react-router-dom'

import { projects } from './../assets/AllProjects'

const ProjectDetail:React.FC = () => {

    const params = useParams()
    const project = projects.find( project => project.title === params.title)

    return (
        <div>
            <h1>Project Detail</h1>
            <p>{project!.id}</p>
            <p>{project!.title}</p>
        </div>
    )
}

export default ProjectDetail
