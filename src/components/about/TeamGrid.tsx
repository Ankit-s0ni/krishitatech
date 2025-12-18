'use client';

import styles from './TeamGrid.module.scss';

const team = [
    { id: 1, name: 'Alex Rivera', role: 'Creative Director', pro: '', fun: '' },
    { id: 2, name: 'Sarah Jenkins', role: 'Lead Strategist', pro: '', fun: '' },
    { id: 3, name: 'David Chen', role: 'Tech Lead', pro: '', fun: '' },
];

export default function TeamGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>The Minds Behind</h2>
                <div className={styles.grid}>
                    {team.map((member) => (
                        <div key={member.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                {/* Placeholders */}
                                <div className={`${styles.photo} ${styles.proPhoto}`} style={{ background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Pro</div>
                                <div className={`${styles.photo} ${styles.funPhoto}`} style={{ background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Fun!</div>
                            </div>
                            <h3 className={styles.name}>{member.name}</h3>
                            <p className={styles.role}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
