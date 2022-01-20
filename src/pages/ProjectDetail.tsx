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
                        <NavLink className={Styles.imgContainer} to={'/projects'}>
                            <img src={arrowIcon} alt="arrowIcon" />
                        </NavLink>
                </div>

                <div>
                <h1>Project Detail</h1>
                <p>{project!.id}</p>
                <p>{project!.title}</p>
                </div>
            </div>

        </Card>
        
    )
}

export default ProjectDetail
