import React from 'react'
import Styles from './Header.module.scss'

import Navigation from './Navigation'

const Header: React.FC = () => {
    return (
        <div className={Styles.container}>
            <Navigation></Navigation>
        </div>
    )
}

export default Header
