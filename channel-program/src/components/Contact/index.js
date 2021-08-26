import React, { useEffect, useState } from 'react'
import styles from './contact.module.css'
import { useForm } from 'react-hook-form';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { getCompanyTypes, postContact } from '../../services/user';
import Loader from '../../utils/loader';




export default function Contact() {
    const [types, setTypes] = useState([])
    const [showLoader, setShowLoader] = useState(false)
    const [contactSent, setContactSent] = useState(false)
    const { register, handleSubmit, formState } = useForm();

    const onSubmit = (data) => {
        if (Object.keys(formState.errors).length > 0) {
            return
        }

        setShowLoader(true)
        data.type_id = parseInt(data.type_id)

        postContact(data)
            .then(r => {
                setContactSent(true)
                setShowLoader(false)
            })
            .catch(e => console.error(e))
    };

    function getTypeOptions() {
        getCompanyTypes()
            .then(r => {
                setTypes(r.data.company_types.results)
            })
            .catch(e => console.error(e))

        return
    }

    function getMessageClass() {
        if (contactSent) {
            return 'showElement'
        } else {
            return 'hideToRight'
        }
    }

    function getFormClass() {
        if (!contactSent) {
            return 'showElement'
        } else {
            return 'hideToLeft'
        }
    }

    useEffect(() => {
        getTypeOptions()
    }, [])

    return (
        <>
            <Header />
            <div className={styles.contactContainer}>
                <div className={styles.formContainer}>
                    <div className={getFormClass()}>
                        <h2>Contact Us</h2>
                        <div className={styles.infoRow}>
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
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="h-100">
                            <div className={styles.formBody}>
                                <input
                                    className={styles.contactInput + " cpInput"}
                                    type="text"
                                    placeholder="Name"
                                    invalid={formState.isSubmitted && formState.errors.name ? "true" : "false"}
                                    {...register("name", { required: true })}
                                />
                                <input
                                    className={styles.contactInput + " cpInput"}
                                    type="email"
                                    placeholder="Email Address"
                                    invalid={formState.isSubmitted && formState.errors.email ? "true" : "false"}
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                />
                                <input
                                    className={styles.contactInput + " cpInput"}
                                    type="text"
                                    placeholder="Company"
                                    invalid={formState.isSubmitted && formState.errors.company ? "true" : "false"}
                                    {...register("company", { required: true })}
                                />
                                <select
                                    className={styles.contactInput + " cpInput"}
                                    placeholder="Company Type"
                                    invalid={formState.isSubmitted && formState.errors.type_id ? "true" : "false"}
                                    {...register("type_id", {
                                        required: true,
                                        valueAsNumber: true,
                                        validate: v => v !== 0
                                    })}
                                >
                                    <option value="0">Company Type</option>
                                    {types.length > 1
                                        ? types.map(t => <option key={t.id} value={t.properties.type_id}>{t.properties.description}</option>)
                                        : null
                                    }
                                </select>
                                <textarea
                                    className="cpInput col-12 mt-1"
                                    placeholder="Write your message here"
                                    rows="3"
                                    invalid={formState.isSubmitted && formState.errors.message ? "true" : "false"}
                                    {...register("message", { required: true })}
                                />
                                <button type="submit" className="cpMainBtn w-100 mt-4" disabled={formState.isSubmitting}>Send</button>
                            </div>
                        </form>
                    </div>
                    <div className={getMessageClass() + ' ' + styles.messageBody}>
                        <h3 className={styles.messageTitle}>Thanks for reaching out!</h3>
                        <p className={styles.messageSubtitle + ' mt-4 mb-5'}>We will answer you as soon as possible.</p>
                        <br />
                        <a href="/home" className="cpMainBtn">Back to homepage</a>
                    </div>
                </div>
                <div className={styles.mapContainer}>
                    <div className={styles.centerDot}></div>
                </div>
                <Loader style={showLoader ? { display: 'grid' } : { display: 'none' }} />
            </div>
            <Footer />
        </>
    )
}