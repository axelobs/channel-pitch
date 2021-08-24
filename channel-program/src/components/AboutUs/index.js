import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import styles from './aboutus.module.css'

export default function AboutUs() {


    return(
        <>
        <Header/>
            <div className={styles.imageBgContainer}>
                <img
                    src="https://sweetsoul.sirv.com/BairesDev/ChannelProgram/placeholderBG.jpg"
                    className={styles.imageBg}
                    alt="Placeholder"
                />
                <h2>About Us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipuscing elit, sed do
                    eiusmod tempor incidunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className={styles.descriptionContainer}>
                <div className={styles.descriptionCol}>
                    <h3>Our Mission</h3>
                    <p>
                        <b>Vendors:</b>To create an opportunity, a space, where the playing field is equal for vendors of
                        all sizes and maturity to present their solutions in front of an engaged audience. This will also
                        present a unique experience where the vendor will know exactly which attendees are interested in
                        hearing from them.
                    </p>
                    <p>
                        <b>MSPs/IT Providers/VARS:</b> To give the power back to the MSP/IT Providers. You will be able to
                        hear from a variety of vendors (New, Emerging, Veteran) about only the most important things, where
                        you are in control of whether there is a follow up conversation.
                    </p>
                </div>
                <div className={styles.imageGrid}>
                    <div className={styles.colImgContainer}>
                        <img
                            src="/Media/imagePlaceholder.jpg"
                            className={styles.colImg}
                            alt="Placeholder"
                        />
                        <img
                            src="/Media/imagePlaceholder.jpg"
                            className={styles.colImg}
                            alt="Placeholder"
                        />
                    </div>
                    <div className={styles.rowImgContainer}>
                        <img
                            src="/Media/imagePlaceholder.jpg"
                            className={styles.rowImg}
                            alt="Placeholder"
                        />
                    </div>
                </div>
            </div>
          <Footer/>
        </>
    )
}