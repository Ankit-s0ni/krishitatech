'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './CaseStudyDetail.module.scss';
import Link from 'next/link';

export default function CaseStudyDetail({ slug }: { slug: string }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <article>
            <header className={styles.header}>
                <div className={styles.bgImage}>
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent, #050505)' }} />
                    {/* Real image would go here */}
                </div>
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>{slug.replace('-', ' ')}</h1>
                    <div className={styles.meta}>
                        <div>
                            <span>Client</span>
                            <p style={{ color: '#fff' }}>Tech Corp</p>
                        </div>
                        <div>
                            <span>Service</span>
                            <p style={{ color: '#fff' }}>Web & Brand</p>
                        </div>
                        <div>
                            <span>Year</span>
                            <p style={{ color: '#fff' }}>2024</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className={styles.body}>
                <div>
                    <h3 className={styles.sectionTitle}>The Challenge</h3>
                </div>
                <div>
                    <p className={styles.text}>
                        The client needed a complete overhaul of their digital presence to match their
                        rapid expansion into new markets. Their existing brand felt outdated and
                        didn&apos;t reflect their innovative tech stack.
                    </p>
                </div>
            </div>

            <div className={styles.parallaxSection} ref={containerRef}>
                <motion.div style={{ y }} className={styles.chart}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Results</h2>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'space-between' }}>
                        <div>
                            <h3 style={{ fontSize: '3rem', color: '#3b82f6' }}>+200%</h3>
                            <p>Organic Traffic</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '3rem', color: '#3b82f6' }}>50%</h3>
                            <p>Conversion Rate</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '3rem', color: '#3b82f6' }}>4.9</h3>
                            <p>App Store Rating</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className={styles.body}>
                <div>
                    <h3 className={styles.sectionTitle}>The Execution</h3>
                </div>
                <div>
                    <p className={styles.text}>
                        We implemented a headless CMS architecture using Next.js to ensure lightning-fast load times.
                        The design system was built from the ground up with a focus on dark mode aesthetics and micro-interactions.
                    </p>
                </div>
            </div>

            <div style={{ padding: '6rem 0', textAlign: 'center' }}>
                <Link href="/work" style={{ fontSize: '1.5rem', textDecoration: 'underline' }}>
                    Back to Work
                </Link>
            </div>
        </article>
    );
}
