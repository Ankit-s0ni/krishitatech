import CaseStudyDetail from '@/components/work/CaseStudyDetail';

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <main>
            <CaseStudyDetail slug={params.slug} />
        </main>
    );
}
