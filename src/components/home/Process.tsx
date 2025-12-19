'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Process.module.scss';

const steps = [
    { id: 1, title: 'Discovery', description: 'We immerse ourselves in your brand to understand your goals and audience.' },
    { id: 2, title: 'Strategy', description: 'We build a roadmap that aligns creative vision with business objectives.' },
    { id: 3, title: 'Creation', description: 'Our designers and developers bring the concept to life with pixel-perfect precision.' },
    { id: 4, title: 'Launch', description: 'We handle the deployment and ensure a smooth takeoff into the market.' },
];

export default function Process() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className={styles.section} ref={targetRef}>
            <div className={styles.container}>
                {/* Animated fill line */}
                <div className={styles.timelineLine}>
                    <motion.div
                        style={{ width: '100%', height, background: '#2563eb' }}
                    />
                </div>

                <div className={styles.stepsWrapper}>
                    {steps.map((step) => (
                        <div key={step.id} className={styles.step}>
                            <div className={styles.stepContent}>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            <div className={styles.stepNumber}>0{step.id}</div>
                            <div className={styles.stepContent} style={{ visibility: 'hidden' }} /> {/* Spacer */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}