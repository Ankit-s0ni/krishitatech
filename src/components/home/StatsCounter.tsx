'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import styles from './StatsCounter.module.scss';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} className={styles.number}>0{suffix}</span>;
}

const stats = [
    { id: 1, value: 500, label: 'Projects Completed', suffix: '+' },
    { id: 2, value: 98, label: 'Client Retention', suffix: '%' },
];

export default function StatsCounter() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {stats.map((stat) => (
                    <div key={stat.id} className={styles.statItem}>
                        <Counter value={stat.value} suffix={stat.suffix} />
                        <p className={styles.label}>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
