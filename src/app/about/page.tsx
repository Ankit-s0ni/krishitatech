import TeamGrid from '@/components/about/TeamGrid';
import ProcessTimeline from '@/components/about/ProcessTimeline';

export default function AboutPage() {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '100px' }}>
            <div className="container">
                <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '4rem', marginBottom: '2rem' }}>About Us</h1>
                <p style={{ maxWidth: '600px', paddingBottom: '4rem' }}>
                    We are a collective of dreamers, doers, and digital artisans.
                </p>
            </div>
            <TeamGrid />
            <ProcessTimeline />
        </main>
    );
}
