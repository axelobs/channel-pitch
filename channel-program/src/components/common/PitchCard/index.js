import React from 'react'
import styles from './PitchCard.module.css'


export default function PitchCard({ pitch }) {

    return (
        <div className={styles.pitchCard}>
            <video
                onMouseOver={e => e.target.play()}
                onMouseOut={e => e.target.pause()}
                width='350px'
                height='235px'
                loop muted
            >
                <source src={pitch.url} type="video/mp4" />
            </video>
            <h3>{pitch.title}</h3>
            <p>{pitch.description}</p>
            <br />
            <a href={pitch.btnUrl} className={styles.pitchBtn}>{pitch.btnTxt}</a>
        </div>
    )
}