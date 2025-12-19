'use client';

import styles from './ClientMarquee.module.scss';
// import { ReactComponent as Logo1 } from '@/assets/logo1.svg'; // Placeholder for real SVGs

const clients = [
    { name: 'Google', variant: 'primary' },
    { name: 'Spotify', variant: 'secondary' },
    { name: 'Nike', variant: 'accent' },
    { name: 'Apple', variant: 'minimal' },
    { name: 'Netflix', variant: 'gradient' },
    { name: 'Tesla', variant: 'bold' },
    { name: 'Amazon', variant: 'subtle' },
    { name: 'Airbnb', variant: 'elegant' }
];

export default function ClientMarquee() {
    // Duplicate list for infinite scroll effect
    const marqueeList = [...clients, ...clients, ...clients];

    return (
        <section className={styles.section}>
            <div className={styles.track}>
                {marqueeList.map((client, index) => (
                    <div key={`${client.name}-${index}`} className={`${styles.logoItem} ${styles[client.variant]}`}>
                        {/* Replace textual span with actual Image/SVG later */}
                        <span>{client.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
