import Hero from '@/components/home/Hero';
import ServicesSlide from '@/components/home/ServicesSlide';
import StatsCounter from '@/components/home/StatsCounter';
import ClientMarquee from '@/components/home/ClientMarquee';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSlide />
      <StatsCounter />
      <ClientMarquee />
      <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '2rem', opacity: 0.5 }}>More coming soon...</h2>
      </div>
    </main>
  );
}
