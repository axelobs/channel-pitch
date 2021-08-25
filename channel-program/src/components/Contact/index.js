import React, { useEffect, useState } from 'react'
import styles from './contact.module.css'
import { useForm } from 'react-hook-form';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { getCompanyTypes, postContact } from '../../services/user';




export default function Contact() {
    const [types, setTypes] = useState([])
    const { register, handleSubmit, formState } = useForm();

    const onSubmit = async (data) => {
        data.type_id = parseInt(data.type_id)
        postContact(data)
            .then(r => {
                console.log(r)
            })
            .catch(e => console.error(e))
    };

    function getTypeOptions(){
        getCompanyTypes()
            .then(r => {
                setTypes(r.data.company_types.results)
            })
            .catch(e => console.error(e))
            
        return
    }

    
    useEffect(() => {
        getTypeOptions()
    }, [])

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
                                {...register("type_id", { required: true })}
                            >
                                <option value="">Company Type</option>
                                {types.length > 1
                                    ? types.map(t => <option key={t.id} value={t.properties.type_id}>{t.properties.description}</option>)
                                    : null
                                }
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