import PageHero from '@/components/PageHero'
import SectionReveal from '@/components/SectionReveal'
import FaqAccordionList from '@/components/FaqAccordionList'
import { fetchPageBySlug } from '@/lib/api'
import { canonicalFor } from '@/lib/metadata'

export const revalidate = 300

export async function generateMetadata() {
  const data = await fetchPageBySlug('home')
  const yoastTitle = data?.yoast_head_json?.title || ''
  const shortSiteName = yoastTitle.includes('|') ? yoastTitle.split('|').pop().trim() : yoastTitle || 'Remote Dosimetrist'

  return {
    title: `FAQ | ${shortSiteName}`,
    description:
      data?.yoast_head_json?.description ||
      'Answers to common questions about remote dosimetry services.',
    alternates: {
      canonical: canonicalFor('/faq'),
    },
  }
}

export default async function FaqPage() {
  const data = await fetchPageBySlug('home')
  const s6 = data?.acf?.section_6_fields
  const faqs = s6?.faqs ?? []
  const heroTitle = 'Frequently Asked Questions'

  return (
    <section className="ip-page-enter ip-grain bg-white">
      <PageHero
        title={heroTitle}
        breadcrumb="FAQ"
      />

      <div className="ip-section ip-section-white py-12 md:py-24 relative">
        <div className="ip-ambient ip-ambient-1" />
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <SectionReveal>
            <div className="sr-item">
              <FaqAccordionList faqs={faqs} />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
