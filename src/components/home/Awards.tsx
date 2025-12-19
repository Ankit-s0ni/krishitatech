'use client';

import { motion } from 'framer-motion';
import styles from './Awards.module.scss';

const awards = [
    {
        id: 1,
        title: "Best Digital Agency 2024",
        organization: "Marketing Excellence Awards",
        year: "2024",
        category: "Digital Innovation"
    },
    {
        id: 2,
        title: "Brand Excellence Award",
        organization: "Creative Design Institute",
        year: "2024",
        category: "Brand Strategy"
    },
    {
        id: 3,
        title: "Top Marketing Agency",
        organization: "Business Innovation Summit",
        year: "2023",
        category: "Marketing"
    },
    {
        id: 4,
        title: "Website of the Year",
        organization: "Web Design Awards",
        year: "2023",
        category: "Web Design"
    },
    {
        id: 5,
        title: "Social Media Campaign Winner",
        organization: "Social Media Excellence",
        year: "2023",
        category: "Social Media"
    },
    {
        id: 6,
        title: "Startup Partner of the Year",
        organization: "Tech Startup Association",
        year: "2022",
        category: "Partnership"
    }
];

export default function Awards() {
    return (
        <section className={styles.awards}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2>Awards & Recognition</h2>
                    <p>Our work has been recognized by industry leaders and creative communities worldwide.</p>
                </motion.div>

                <div className={styles.grid}>
                    {awards.map((award, index) => (
                        <motion.div
                            key={award.id}
                            className={styles.awardCard}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.awardIcon}>
                                <div className={styles.iconPlaceholder}>
                                    Award
                                </div>
                            </div>

                            <div className={styles.awardContent}>
                                <h3>{award.title}</h3>
                                <p className={styles.organization}>{award.organization}</p>
                                <div className={styles.awardMeta}>
                                    <span className={styles.year}>{award.year}</span>
                                    <span className={styles.category}>{award.category}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.stats}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.stat}>
                        <h3>50+</h3>
                        <p>Awards Won</p>
                    </div>
                    <div className={styles.stat}>
                        <h3>25+</h3>
                        <p>Years Combined Experience</p>
                    </div>
                    <div className={styles.stat}>
                        <h3>500+</h3>
                        <p>Happy Clients</p>
                    </div>
                    <div className={styles.stat}>
                        <h3>98%</h3>
                        <p>Client Satisfaction</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}