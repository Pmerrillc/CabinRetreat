import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
    EMAILJS_PUBLIC_KEY, 
    EMAILJS_PRIVATE_KEY, 
} from '../consts';

import styles from "./ContactForm.module.css"

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_jwqyjvs', 'template_sl12c4f', form.current, {
            publicKey: EMAILJS_PUBLIC_KEY,
            privateKey: EMAILJS_PRIVATE_KEY,
        })
        .then(
            (result) => {
                console.log('SUCCESS!', result.text);
                form.current.reset();
                alert("We'll get back to you shortly.");  
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };
    
    return (
        <div className={styles.container}>
            <h1>{EMAILJS_PRIVATE_KEY}</h1>
            <h1>{EMAILJS_PUBLIC_KEY}</h1>
            <h1>kat slater</h1>
            <form className={styles.form} ref={form} onSubmit={sendEmail}>
                    <div className={styles.formItem}>
                        <label className="inter-regular" htmlFor="firstname">
                            Name
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            name="from_firstname"
                            className={styles.formField}
                            autoComplete="off"
                            required
                        />
                    </div>


                <div className={styles.formItem}>
                    <label className="inter-regular" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="from_email"
                        className={styles.formField}
                        autoComplete="on"
                        required
                    />
                </div>
                <div className={styles.formItem}>
                    <label className="inter-regular" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className={`${styles.formField} ${styles.textArea}`}
                        rows="4"
                        autoComplete="off"
                        required
                    />
                </div>
                <button type="submit" className={`${styles.button} ${styles.secondaryButton} ${styles.fullWidth}`} value={"Send"}> 
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
