'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
import clsx from 'clsx';

const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={clsx(styles.header, scrolled && styles.scrolled)}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
            <nav className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    KRISHITA TECH<span className={styles.logoAccent}>.</span>
                </Link>

                <div className={styles.navLinks}>
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href} 
                            className={clsx(styles.link, pathname === item.href && styles.active)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <Link href="/contact" className={styles.cta}>
                    Let&apos;s Talk
                </Link>
            </nav>
        </motion.header>
    );
}
