import React from 'react'
import PitchCard from '../PitchCard'

import styles from './PitchesGrid.module.css'

export default function PitchesGrid({ pitches }){


    return(
        <div className={styles.pitchesContainer}>
            <div className={styles.pitchesTitle}>
                <h2>Latest Pitches</h2>
                <hr />
            </div>
            <div className={styles.pitchesGrid}>
                {pitches.map(pitch => (
                    <PitchCard pitch={pitch} key={pitch.title}/>
                ))}
            </div>
        </div>
    )
}