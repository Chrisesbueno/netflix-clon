import Accordion from './Accordion'
import { faq } from '@/constants'
import styles from '@/styles/FAQ.module.css'
const FAQ = () => {
    return (
        <div className={styles.FAQ} >
            {/* Title */}
            <div className={styles.title}>
                <h1>{faq.title}</h1>
            </div>
            {/* questions */}
            <div className={styles.questions}>
                {
                    faq.questions.map((item) => (
                        <Accordion key={item.id} title={item.title} answer={item.answer} />
                    ))
                }
            </div>
        </div>
    )
}

export default FAQ