import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Password } from '../../../utils/passwordGenerator';
import { postEventAttendance } from '../../../services/event';

import styles from './subscribeForm.module.css'

export default function SubscribeForm({ event }) {
    const [subscribed, setSubscribed] = useState(false)
    const { register, handleSubmit, formState } = useForm();
    
    async function onSubmit(data) {
        await postEventAttendance(data, 1)
                .then(r => {
                    setSubscribed(true)
                })
                .catch(e => console.error(e))
    }
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
                        invalid={formState.isSubmitted && formState.errors.user_name ? "true" : "false"}
                        {...register("user_name", { required: true })}
                    />
                    <input
                        className="cpInput my-2"
                        type="text"
                        placeholder="Email *"
                        invalid={formState.isSubmitted && formState.errors.user_email ? "true" : "false"}
                        {...register("user_email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <input
                        className="cpInput my-2"
                        type="password"
                        placeholder="Password"
                        hidden
                        value={pass}
                        {...register("user_pass")}
                    />
                    <input
                        className="cpInput my-2"
                        type="text"
                        placeholder="Company *"
                        invalid={formState.isSubmitted && formState.errors.company ? "true" : "false"}
                        {...register("company", { required: true })}
                    />
                    <label className={styles.formCheckContainer}>
                        <input
                            className="cpCheckbox mx-2"
                            type="checkbox"
                            placeholder="I agree to Channel Program's Terms of Service."
                            invalid={formState.isSubmitted && formState.errors.terms_consent ? "true" : "false"}
                            {...register("terms_consent", { 
                                required: true,
                                validate: v => v === true
                            })}
                        />
                        I agree to Channel Program's <a href="/#">Terms of Service</a>.
                    </label>
                    <label className={styles.formCheckContainer}>
                        <input
                            className="cpCheckbox mx-2"
                            type="checkbox"
                            placeholder="I agree to Channel Program's Privacy Policy."
                            invalid={formState.isSubmitted && formState.errors.privacy_consent ? "true" : "false"}
                            {...register("privacy_consent", { 
                                required: true,
                                validate: v => v === true
                            })} // TODO: not on backend yet, but param name would be privacy_consent
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