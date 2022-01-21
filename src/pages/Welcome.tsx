import React from 'react'
import Styles from './Welcome.module.scss'
import Card from '../components/Card'
import { NavLink } from 'react-router-dom'

import cv from '../assets/resume/CV_Rizwan-1.jpg'
import RizwanPic from './../assets/images/rizwan-pic.jpeg'
import envelope from './../assets/icons/envelope-regular.svg'
import linkedIn from './../assets/icons/linkedin-in-brands.svg'
import resumeIcon from './../assets/icons/file-regular.svg'
import arrowIcon from '../assets/icons/Pfeilrechts.svg'

const Welcome: React.FC = () => {
    return (
        <Card type={'welcomeCard'}>
            <div className={Styles.container}>
                <div className={Styles.allContentContainer}>
                    <div className={Styles.introduction}>
                        <div className={Styles.greeting}>Hello</div>
                        <div className={Styles.description}>
                            Rizwan Mushtaq dhudhaal is passionate about Web Development.
                        </div>
                        <div className={Styles.contactContainer}>
                            <div className={Styles.logoContainer}>
                                <img src={resumeIcon} alt="resume" />
                            </div>
                            <a 
                                href={cv} 
                                target='_blank' 
                                rel="noreferrer"
                            >resume</a>
                        </div>
                        <div className={Styles.contactContainer}>
                            <div className={Styles.logoContainer}>
                                <img src={envelope} alt="email" />
                            </div>
                            <a 
                                href='https://mail.google.com/mail' 
                                target='_blank' 
                                rel="noreferrer"
                            >rizwanmushtaq15@gmail.com</a>
                        </div>
                        <div className={Styles.contactContainer}>
                            <div className={Styles.logoContainer}>
                                <img src={linkedIn} alt="email" />
                            </div>
                            <a 
                                href='https://www.linkedin.com/in/rizwan-mushtaq-dhudhaal-7a4091128/' 
                                target='_blank' 
                                rel="noreferrer"
                            >Rizwan Mushtaq Dhudhaal</a>
                        </div>
                    </div>
                    <div className={Styles.avatar}>
                        <img src={RizwanPic} alt="rizwan-pic" />
                    </div>
                </div>
                <div className={Styles.rightArrowContainer}>
                    <div className={Styles.rightArrowContainerInner}>
                        <NavLink className={Styles.imgContainer} to={'/projects'}>
                            <img src={arrowIcon} alt="arrowIcon" />
                        </NavLink>
                    </div>  
                </div>
            </div>
        </Card>
    )
}

export default Welcome
