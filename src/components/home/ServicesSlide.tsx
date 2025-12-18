'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ServicesSlide.module.scss';

const services = [
    {
        id: '01',
        title: 'Brand Identity',
        description: 'We build brands that speak louder than words. From logo design to full visual systems.',
    },
    {
        id: '02',
        title: 'Web Experience',
        description: 'Award-winning websites that blend aesthetics with performance and SEO.',
    },
    {
        id: '03',
        title: 'Content Creation',
        description: 'Photography, video, and copy that tells your story and engages your audience.',
    },
    {
        id: '04',
        title: 'Growth Marketing',
        description: 'Data-driven strategies to scale your business and increase ROI.',
    },
];

export default function ServicesSlide() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ['1%', '-75%']);

    return (
        <section ref={targetRef} className={styles.section} id="services">
            <div className={styles.stickyContainer}>
                <motion.div style={{ x }} className={styles.wrapper}>
                    <div className={styles.headerCard}>
                        <h2>Our Expertise</h2>
                        <p>
                            We don&apos;t just offer services; we provide solutions that propel your business forward.
                            Scroll through to see how we can help.
                        </p>
                    </div>

                    {services.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <span className={styles.cardNumber}>{service.id}</span>
                            {/* Placeholder for optional background image */}
                            <div className={styles.cardImage} style={{ background: `linear-gradient(45deg, #111, #222)` }} />

                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
