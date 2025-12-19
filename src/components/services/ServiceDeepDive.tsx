'use client';

import { useState, useEffect } from 'react';
import styles from './ServiceDeepDive.module.scss';
import clsx from 'clsx';
// import { motion } from 'framer-motion';

const services = [
    {
        id: 'paid-media',
        title: 'Paid Media',
        description: 'Maximize your ROI with precision-targeted ad campaigns on Google, Meta, and LinkedIn. We use data-driven strategies to ensure every dollar spent contributes to your growth.',
    },
    {
        id: 'content-creation',
        title: 'Content Creation',
        description: 'From high-end video production to engaging social media assets, we tell your brand story in a way that resonates. Our creative team handles everything from script to screen.',
    },
    {
        id: 'brand-identity',
        title: 'Brand Identity',
        description: 'Your brand is more than a logo. It’s an experience. We craft comprehensive visual identities, voice guidelines, and brand systems that set you apart in a crowded market.',
    },
    {
        id: 'web-tech',
        title: 'Web & Tech',
        description: 'We build digital products that perform. Using the latest tech stack (Next.js, WebGL), we create immersive websites that are as fast as they are beautiful.',
    },
];

export default function ServiceDeepDive() {
    const [activeId, setActiveId] = useState(services[0].id);

    // Simple scroll spy logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(`.${styles.serviceSection}`);
            let current = '';

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id') || '';
                }
            });

            if (current) setActiveId(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 150,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <h1>Services</h1>
                <nav className={styles.nav}>
                    {services.map((s) => (
                        <div
                            key={s.id}
                            className={clsx(styles.navItem, activeId === s.id && styles.active)}
                            onClick={() => scrollToSection(s.id)}
                        >
                            {s.title}
                        </div>
                    ))}
                </nav>
            </aside>

            <main className={styles.content}>
                {services.map((s) => (
                    <section key={s.id} id={s.id} className={styles.serviceSection}>
                        <h2>{s.title}</h2>
                        <div className={styles.imagePlaceholder}>
                            {/* Image would go here */}
                            <div style={{ padding: '2rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', color: '#666666' }}>
                                VISUAL VISUALIZATION
                            </div>
                        </div>
                        <p>{s.description}</p>
                        <p>
                            Detailed breakdown of how we approach {s.title.toLowerCase()} and why our method works better than the competition.
                            We focus on metrics, aesthetics, and user psychology.
                        </p>
                    </section>
                ))}
            </main>
        </div>
    );
}
