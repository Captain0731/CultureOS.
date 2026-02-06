'use client';

import React, { useEffect, useState } from 'react';
import styles from './preloader.module.scss';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [exit, setExit] = useState(false);

    useEffect(() => {
        // Sequence:
        // 0s: Start (Text reveals handled by CSS)
        // 2.0s: Start exit animation (Curtains split)
        // 2.8s: Remove from DOM

        const timerExit = setTimeout(() => {
            setExit(true);
        }, 2200);

        const timerRemove = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => {
            clearTimeout(timerExit);
            clearTimeout(timerRemove);
        };
    }, []);

    if (!loading) return null;

    return (
        <div className={`${styles.preloader} ${exit ? styles.exit : ''}`}>
            <div className={`${styles.curtain} ${styles['curtain-top']}`}></div>
            <div className={`${styles.curtain} ${styles['curtain-bottom']}`}></div>

            <div className={styles['text-container']}>
                <div className={styles.word}>
                    <span>CULTURE</span>
                </div>
                <div className={styles.word}>
                    <span>OS.</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
