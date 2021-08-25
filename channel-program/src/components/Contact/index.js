import React from 'react'
import styles from './contact.module.css'
import { useForm } from 'react-hook-form';
import Header from '../common/Header';
import Footer from '../common/Footer';




export default function Contact() {
    const { register, handleSubmit, formState } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <>
            <Header />
            <div className={styles.contactContainer}>
                <div className={styles.formContainer}>
                    <h2>Contact Us</h2>
                    <div className={styles.iconRow}>
                        <img
                            src='https://sweetsoul.sirv.com/BairesDev/ChannelProgram/marker_24px.png'
                            className={styles.icon}
                            alt="Location Icon"
                        />
                        <p>Address</p>
                    </div>
                    <div className={styles.iconRow}>
                        <img
                            src='https://sweetsoul.sirv.com/BairesDev/ChannelProgram/phone_32px.png'
                            className={styles.icon}
                            alt="Phone Icon"
                        />
                        <p>(+1) 123 456 7890</p>
                    </div>
                    <div className={styles.iconRow}>
                        <img
                            src='https://sweetsoul.sirv.com/BairesDev/ChannelProgram/iphone_24px.png'
                            className={styles.icon}
                            alt="Mobile Icon"
                        />
                        <p>(+1) 123 456 7890</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="h-100">
                        <div className="container-fluid p-0 d-flex align-items-center justify-content-center flex-wrap mt-5">
                            <input
                                className={styles.contactInput + " cpInput"}
                                type="text"
                                placeholder="Name"
                                {...register("name", { required: true })}
                            />
                            <input
                                className={styles.contactInput + " cpInput"}
                                type="email"
                                placeholder="Email Address"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                            <input
                                className={styles.contactInput + " cpInput"}
                                type="text"
                                placeholder="Company"
                                {...register("company", { required: true })}
                            />
                            <select
                                className={styles.contactInput + " cpInput"}
                                placeholder="Company Type"
                                {...register("company_type", { required: true })}
                            >
                                <option value="">Company Type</option>
                                <option value="1">Type 1</option>
                                <option value="2">Type 2</option>
                                <option value="3">Type 3</option>
                            </select>
                            <textarea
                                className="cpInput col-12 mt-1"
                                placeholder="Write your message here"
                                rows="3"
                                {...register("message", { required: true })}
                            />
                            <button type="submit" className="cpMainBtn w-100 mt-4" disabled={formState.isSubmitting}>Send</button>
                        </div>
                    </form>
                </div>
                <div className={styles.mapContainer}>
                    <div className={styles.centerDot}></div>
                </div>
            </div>
            <Footer />
        </>
    )
}