'use client';

import styles from './ContactForm.module.scss';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        service: 'Branding',
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thanks ${formData.name}, we'll be in touch!`);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>Start a Project</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <span>Hi, my name is </span>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <span> and I&apos;m looking for help with </span>
                    <select
                        name="service"
                        className={styles.select}
                        value={formData.service}
                        onChange={handleChange}
                    >
                        <option value="Branding">Branding</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Strategy">Strategy</option>
                    </select>
                    <span>. You can reach me at </span>
                    <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <span> to discuss details.</span>

                    <br />
                    <button type="submit" className={styles.button}>Send Request</button>
                </form>
            </div>
        </section>
    );
}
