'use client';

import styles from './ClientMarquee.module.scss';
// import { ReactComponent as Logo1 } from '@/assets/logo1.svg'; // Placeholder for real SVGs

const clients = [
    'Google', 'Spotify', 'Nike', 'Apple', 'Netflix', 'Tesla', 'Amazon', 'Airbnb'
];

export default function ClientMarquee() {
    // Duplicate list for infinite scroll effect
    const marqueeList = [...clients, ...clients, ...clients];

    return (
        <section className={styles.section}>
            <div className={styles.track}>
                {marqueeList.map((client, index) => (
                    <div key={`${client}-${index}`} className={styles.logoItem}>
                        {/* Replace textual span with actual Image/SVG later */}
                        <span>{client}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
