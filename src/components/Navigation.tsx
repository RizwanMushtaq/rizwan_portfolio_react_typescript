import React from 'react'
import Styles from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'

const Navigation: React.FC = () => {
    return (
        <div>
           <ul className={Styles.navigationList}>
                <li>
                    <NavLink to={'/welcome'}>Welcome</NavLink>
                </li>
                <li>
                    <NavLink to={'/projects'}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Conatct</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
