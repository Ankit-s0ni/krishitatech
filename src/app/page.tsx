import Hero from '@/components/home/Hero';
import ClientMarquee from '@/components/home/ClientMarquee';
import ServicesSlide from '@/components/home/ServicesSlide';
import Process from '@/components/home/Process';
import StatsCounter from '@/components/home/StatsCounter';
import Awards from '@/components/home/Awards';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function HomePage() {
    return (
        <main>
            <Hero />
            <ClientMarquee />
            <ServicesSlide />
            <Process />
            <StatsCounter />
            <Awards />
            <Testimonials />
            <CTA />
        </main>
    );
}
