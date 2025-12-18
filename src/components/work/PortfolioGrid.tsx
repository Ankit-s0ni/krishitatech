'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './PortfolioGrid.module.scss';
import clsx from 'clsx';
// import Image from 'next/image';

const projects = [
    {
        slug: 'neon-dreams',
        title: 'Neon Dreams',
        category: 'Brand Identity',
        image: '#111', // Placeholder color or path
        video: '', // Placeholder video path
    },
    {
        slug: 'tech-fwd',
        title: 'Tech Fwd',
        category: 'Web Development',
        image: '#222',
        video: '',
    },
    {
        slug: 'urban-flow',
        title: 'Urban Flow',
        category: 'Campaign',
        image: '#151515',
        video: '',
    },
    {
        slug: 'eco-state',
        title: 'Eco State',
        category: 'Strategy',
        image: '#2a2a2a',
        video: '',
    },
];

export default function PortfolioGrid() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>Selected Work</h1>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <Link
                            href={`/work/${project.slug}`}
                            key={project.slug}
                            className={styles.card}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={styles.imageContainer}>
                                {/* Fallback to simple color block for now */}
                                <div style={{ width: '100%', height: '100%', background: project.image }} />

                                {/* Simulated video overlay */}
                                <div
                                    className={clsx({ [styles.playing]: hoveredIndex === index })}
                                    style={{
                                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                        background: 'rgba(59, 130, 246, 0.2)', // Accent color overlay
                                        opacity: hoveredIndex === index ? 1 : 0,
                                        transition: 'opacity 0.4s ease',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}
                                >
                                    {/* <video src={project.video} autoPlay muted loop playsInline /> */}
                                    <span style={{ color: '#fff', fontWeight: 600 }}>See Case Study</span>
                                </div>
                            </div>

                            <div className={styles.info}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectCategory}>{project.category}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
