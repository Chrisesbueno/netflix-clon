import React from 'react'
import FAQ from './FAQ';
import EmailForm from './EmailForm';
import styles from '@/styles/FAQ.module.css'
const OurStory = () => {
    return (

        <div className={styles.ourStory} >
            {/* Frequent questions */}
            <FAQ />
            {/* Email Form */}
            <EmailForm />
        </div>
    )
}

export default OurStory