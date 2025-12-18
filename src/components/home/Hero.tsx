'use client';

import { motion, Variants } from 'framer-motion';
import styles from './Hero.module.scss';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef(null);

    const titleVariants: Variants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.19, 1, 0.22, 1] }
        }
    };

    const containerVariants: Variants = {
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <section className={styles.hero} ref={containerRef}>
            <div className={styles.background}>
                {/* Placeholder for video - using a dark gradient for now or a reliable placeholder */}
                <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)' }} />
            </div>

            <motion.div
                className={styles.content}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className={styles.title}>
                    <span style={{ overflow: 'hidden', display: 'block' }}>
                        <motion.span variants={titleVariants} style={{ display: 'block' }}>We Craft</motion.span>
                    </span>
                    <span style={{ overflow: 'hidden', display: 'block' }}>
                        <motion.span variants={titleVariants} style={{ display: 'block' }}>Digital</motion.span>
                    </span>
                    <span style={{ overflow: 'hidden', display: 'block' }}>
                        <motion.span variants={titleVariants} style={{ color: '#3b82f6', display: 'block' }}>Legends</motion.span>
                    </span>
                </h1>

                <motion.p
                    className={styles.subtitle}
                    variants={titleVariants}
                >
                    Krishita Tech defining the future of digital interaction.
                    We turn brands into movements.
                </motion.p>
            </motion.div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span>Scroll</span>
                <div className={styles.mouse} />
            </motion.div>
        </section>
    );
}
