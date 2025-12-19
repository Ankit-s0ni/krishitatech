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
                {/* Modern light gradient background */}
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)' }} />
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
                        <motion.span variants={titleVariants} style={{ color: '#2563eb', display: 'block' }}>Legends</motion.span>
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
