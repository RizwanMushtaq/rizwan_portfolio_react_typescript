import React from 'react'
import Styles from './Contact.module.scss'
import envelope from './../assets/icons/envelope-regular.svg'
import linkedIn from './../assets/icons/linkedin-in-brands.svg'

import Card from '../components/Card'

const Contact: React.FC = () => {
    return (
        <Card type={'contactCard'}>
            <>
                <div className={Styles.heading}>Contact Rizwan Mushtaq Dhudhaal</div>
                <div className={Styles.subheading}>Get in touch with me to get the ball rolling</div>
                <div className={Styles.contactContainer}>
                    <div className={Styles.logoContainer}>
                        <img src={envelope} alt="email" />
                    </div>
                    <a 
                        href='https://mail.google.com/mail' 
                        target='_blank' rel="noreferrer"
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
            </>
        </Card>
    )
}

export default Contact
