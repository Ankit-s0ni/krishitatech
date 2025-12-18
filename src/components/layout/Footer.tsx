'use client';

import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <h2 className={styles.headline}>Let&apos;s make something legendary together.</h2>
                    <div className={styles.links}>
                        <div>
                            <h4>Socials</h4>
                            <Link href="#">Instagram</Link>
                            <Link href="#">LinkedIn</Link>
                            <Link href="#">Twitter</Link>
                        </div>
                        <div>
                            <h4>Sitemap</h4>
                            <Link href="/services">Services</Link>
                            <Link href="/work">Work</Link>
                            <Link href="/about">About</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.tickerWrapper}>
                <div className={styles.ticker}>
                    {/* Duplicated for scroll */}
                    <span>LET&apos;S TALK</span>
                    <span>LET&apos;S TALK</span>
                    <span>LET&apos;S TALK</span>
                    <span>LET&apos;S TALK</span>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.bottomSection}>
                    <span>© 2024 Krishita Tech.</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
}
