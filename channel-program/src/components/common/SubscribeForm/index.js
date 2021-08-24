import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Password } from '../../../utils/passwordGenerator';

import styles from './subscribeForm.module.css'

export default function SubscribeForm({ event }) {
    const [subscribed, setSubscribed] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        setSubscribed(!subscribed)
    };

    console.log(errors);
    let pass = Password.generate(16)


    function getMessageClass() {
        if (subscribed) {
            return 'showElement'
        } else {
            return 'hideToRight'
        }
    }

    function getFormClass() {
        if (!subscribed) {
            return 'showElement'
        } else {
            return 'hideToLeft'
        }
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="h-100">
            <div className={styles.formContainer}>
                <div className={`container-fluid h-100 d-flex flex-column ${styles.formBody} ${getFormClass()}`}>
                    <h3 className={styles.formTitle}>Subscribe to {event.name}</h3>
                    <p className={styles.formSubtitle}>Please fill this form to subscribe to the Event.</p>
                    <input
                        className="cpInput my-2"
                        type="text"
                        placeholder="Name *"
                        {...register("Name", { required: true })}
                    />
                    <input
                        className="cpInput my-2"
                        type="text"
                        placeholder="Email *"
                        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <input
                        className="cpInput my-2"
                        type="password"
                        placeholder="Password"
                        hidden
                        value={pass}
                        {...register("pass")}
                    />
                    <input
                        className="cpInput my-2"
                        type="text"
                        placeholder="Company *"
                        {...register("Company", { required: true })}
                    />
                    <label className={styles.formCheckContainer}>
                        <input
                            className="cpCheckbox mx-2"
                            type="checkbox"
                            placeholder="I agree to Channel Program's Terms of Service."
                            {...register("ToS", { required: true })}
                        />
                        I agree to Channel Program's <a href="/#">Terms of Service</a>.
                    </label>
                    <label className={styles.formCheckContainer}>
                        <input
                            className="cpCheckbox mx-2"
                            type="checkbox"
                            placeholder="I agree to Channel Program's Privacy Policy."
                            {...register("privacy", { required: true })}
                        />
                        I agree to Channel Program's <a href="/#">Privacy Policy</a>.
                    </label>


                    <input type="submit" value="Subscribe now!" className="cpMainBtn mt-5" />
                </div>
                <div className={getMessageClass() + ' ' + styles.messageBody}>
                    <h3 className={styles.messageTitle}>Thanks for subscribing to<br />{event.name}</h3>
                    <p className={styles.messageSubtitle + ' mt-4 mb-5'}>We're looking forward to see you there!</p>
                    <br />
                    <a href="/" className="cpMainBtn">Back to homepage</a>
                </div>
            </div>
        </form>
    )
}