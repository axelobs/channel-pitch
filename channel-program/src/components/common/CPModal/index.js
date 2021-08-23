import React from 'react'
import SubscribeForm from '../SubscribeForm';
import styles from './cpmodal.module.css'


export default function CPModal({ type = 'success', modalOpen, setModalOpen, event }) {

    function renderModal() {
        switch (type) {
            case 'success':
                return (<h1>Success</h1>)
            case 'subscribe':
                return <SubscribeForm event={event} />
            default:
                <div>Modal Container</div>
        }
    }
    return (
        <div
            className={ modalOpen
                        ? styles.cpModalContainer + ' defaultTransitions' 
                        : styles.cpModalContainer + ' defaultTransitions hideFade ' + styles.hiddenContainer 
                    }
            onClick={() => setModalOpen(false)}
        >
            <div className={styles.cpModalBody}>
                {renderModal()}
                <div className={styles.closeBtn} onClick={() => setModalOpen(false)}>
                    X
                </div>
            </div>
        </div>
    )
}