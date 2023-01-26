import React, { useState } from 'react'
import styles from '@/styles/Accordion.module.css';
const Accordion = ({ title, answer }) => {
    const [isShow, setIsShow] = useState(false)

    const handleShow = () => {
        setIsShow(!isShow)
    }


    return (

        <>
            {/* Container Accordion */}
            <div className={styles.accordion} >
                {/* Button Accordion title */}
                <div className={styles.title}>
                    <button
                        type='button'
                        className={styles.button}
                        onClick={handleShow}
                    >
                        {title}
                    </button>
                    <i className={isShow ? "bx bx-x" : "bx bx-plus"}></i>
                </div>
                {/* content answer  */}
                <div className={styles.answer} style={{ display: isShow ? "block" : "none" }}>
                    <p> {answer}</p>
                </div>
            </div>
        </>
    )
}

export default Accordion