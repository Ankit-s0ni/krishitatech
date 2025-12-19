'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './CTA.module.scss';

interface CTAProps {
    title?: string;
    subtitle?: string;
    primaryButton?: {
        text: string;
        href: string;
    };
    secondaryButton?: {
        text: string;
        href: string;
    };
    variant?: 'default' | 'gradient' | 'minimal';
}

export default function CTA({
    title = "Ready to Transform Your Brand?",
    subtitle = "Let's create something amazing together. Get in touch today and let's discuss your project.",
    primaryButton = { text: "Start Your Project", href: "/contact" },
    secondaryButton = { text: "View Our Work", href: "/work" },
    variant = 'default'
}: CTAProps) {
    return (
        <section className={`${styles.cta} ${styles[variant]}`}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2>{title}</h2>
                    <p>{subtitle}</p>

                    <div className={styles.buttons}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Link href={primaryButton.href} className={styles.primaryButton}>
                                {primaryButton.text}
                            </Link>
                        </motion.div>

                        {secondaryButton && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <Link href={secondaryButton.href} className={styles.secondaryButton}>
                                    {secondaryButton.text}
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    className={styles.background}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.shape1}></div>
                    <div className={styles.shape2}></div>
                    <div className={styles.shape3}></div>
                </motion.div>
            </div>
        </section>
    );
}