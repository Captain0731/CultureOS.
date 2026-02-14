'use client';

import React, { useEffect, useState } from 'react';
import styles from './preloader.module.scss';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [exit, setExit] = useState(false);

    useEffect(() => {
        // Cinematic sequence timing
        const timerExit = setTimeout(() => {
            setExit(true);
        }, 4000);

        const timerRemove = setTimeout(() => {
            setLoading(false);
            // Signal to hero animation that preloader is done
            window.dispatchEvent(new Event("preloaderComplete"));
        }, 5500);

        return () => {
            clearTimeout(timerExit);
            clearTimeout(timerRemove);
        };
    }, []);

    if (!loading) return null;

    const mainTitle = "Culture".split("");

    return (
        <div className={`${styles.preloader} ${exit ? styles.exit : ''}`}>
            <div className={styles['liquid-iris']}></div>

            <div className={styles['geometric-shards']}>
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.shard}
                        style={{ '--index': i } as React.CSSProperties}
                    ></div>
                ))}
            </div>

            <div className={styles['text-container']}>
                <div className={styles.title}>
                    {mainTitle.map((char, i) => (
                        <span
                            key={i}
                            className={styles.letter}
                            style={{ '--char-index': i } as React.CSSProperties}
                        >
                            {char}
                        </span>
                    ))}
                    <span
                        className={styles.letter}
                        style={{ '--char-index': mainTitle.length } as React.CSSProperties}
                    >
                        OS.
                    </span>
                </div>
                <div className={styles.subtitle}>REAL VISIBILITY • CULTURE HEALTH • TEAM INSIGHTS</div>
            </div>
        </div >
    );
};

export default Preloader;