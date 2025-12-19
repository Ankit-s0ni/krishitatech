'use client';

import { motion } from 'framer-motion';
import styles from './Testimonials.module.scss';

const testimonials = [
    {
        id: 1,
        quote: "Krishita Tech transformed our brand identity completely. Their strategic approach and creative execution helped us stand out in a crowded market.",
        author: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
        rating: 5,
        variant: 'primary'
    },
    {
        id: 2,
        quote: "The team's attention to detail and understanding of our industry was exceptional. Our conversion rates improved by 150% after their marketing campaign.",
        author: "Michael Chen",
        role: "Marketing Director, GrowthCo",
        rating: 5,
        variant: 'secondary'
    },
    {
        id: 3,
        quote: "Working with Krishita Tech was a game-changer. They didn't just deliver a website—they delivered a complete digital experience that our customers love.",
        author: "Emma Rodriguez",
        role: "Founder, Creative Studio",
        rating: 5,
        variant: 'accent'
    }
];

export default function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2>What Our Clients Say</h2>
                    <p>Don't just take our word for it—hear from the brands we've helped transform.</p>
                </motion.div>

                <div className={styles.grid}>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className={`${styles.card} ${styles[testimonial.variant]}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.rating}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <blockquote className={styles.quote}>
                                "{testimonial.quote}"
                            </blockquote>
                            <div className={styles.author}>
                                <div className={styles.authorInfo}>
                                    <h4>{testimonial.author}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}