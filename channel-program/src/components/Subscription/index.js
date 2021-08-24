import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import SubscribeForm from '../common/SubscribeForm'

import styles from './subscription.module.css'

export default function Subscription() {
    const event = { name: 'Channel Program Event', date: '09/18/2021', startTime: '16:00:00' }

    return (
      <>
        <Header/>
        <div className="container-fluid d-flex flex-wrap p-0">
            <div className={styles.imageCol}>
                <img
                    src="/Media/imagePlaceholder.jpg"
                    className={styles.imagePos}
                    alt="placeholder"
                />
                <div className={styles.bannerImage}>
                    <h4>{event.name}<br />{event.date} - {event.startTime} ET</h4>
                </div>
            </div>
            <div className={styles.formCol}>
                <SubscribeForm event={event}/>
            </div>
        </div>
        <Footer/>
      </>
    )
}