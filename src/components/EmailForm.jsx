import { useState } from 'react'
import { emailForm } from '@/constants';
import styles from '@/styles/FAQ.module.css';






const CustomButton = ({ text, icon }) => {
    return (
        <>
            <button type="submit">
                {text}
                <i className={icon}></i>
            </button>
        </>
    )
}
const CustomInput = ({ value, onChange, placeholder }) => {
    return (
        <>
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    )
}


const EmailForm = () => {
    const { title, label, button } = emailForm
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${email}`)
    }

    return (
        <div className={styles.emailContainer}>
            {/* Texto */}
            <p>{title}</p>
            {/* Label and Button */}
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <CustomInput value={email} onChange={setEmail} placeholder={label.placeHolder} />
                    <CustomButton {...button} />
                </form>
            </div>
        </div>
    )
}

export default EmailForm