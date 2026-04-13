import React from 'react'
import PageHero from '@/components/PageHero'
import SectionReveal from '@/components/SectionReveal'
import { fetchPageBySlug } from "@/lib/api";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata() {
  const data = await fetchPageBySlug("contact-us");

  return {
    title: data?.yoast_head_json?.title,
    description: data?.yoast_head_json?.description,
  };
}

export default async function ContactPage() {
  const data = await fetchPageBySlug("contact-us");
  return (
    <section className="ip-page-enter ip-grain bg-white">
      <PageHero
        title={data?.acf?.banner_section?.page_title}
        subtitle={data?.acf?.banner_section?.page_description}
        breadcrumb={data?.title?.rendered}
      />

      {/* ── Info Cards ── */}
      <div className="ip-section ip-section-white py-12 md:py-24 relative">
        <div className="ip-ambient ip-ambient-1"></div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <SectionReveal stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {
                data?.acf?.section_1_fields.map((card, index) => (
                  <div className="sr-item ip-card ip-card-hover-blue p-6 md:p-10 rounded-2xl text-center" key={index}>
                    <div className="flex flex-col items-center gap-5">
                      <div className="ip-card-icon w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] text-4xl transition-all duration-500">
                        {/* <FontAwesomeIcon icon={faLocationDot} className="text-[#003777] transition-colors duration-500" /> */}
                        <img src={card.icon.url} alt={card.icon.alt} className='w-[40px]' />
                      </div>
                      <h3 className="text-[#003777] text-[22px] md:text-[26px] font-extrabold uppercase tracking-wide transition-colors duration-500">{card.heading}</h3>
                      <p className="text-[#434961] text-[16px] md:text-[17px] font-medium transition-colors duration-500">{card.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="ip-glow-divider"></div>

      {/* ── Main Contact Section ── */}
      <div className="ip-section ip-section-light py-16 md:py-32 relative">
        <div className="ip-ambient ip-ambient-2"></div>
        <div className="ip-ambient ip-ambient-purple" style={{ top: '5%', right: '10%' }}></div>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
            <SectionReveal direction="left">
              <div className="sr-item flex flex-col gap-9">
                <div className="relative">
                  <div className="ip-dots -left-6 -top-6"></div>
                  <span className="ip-label mb-3 block relative z-10">{data?.acf?.section_2_fields?.sub_heading}</span>
                  {
                    data?.acf?.section_2_fields?.headings.map((heading, index) => (
                      <h2 key={index} className="text-[#003777] text-2xl md:text-[40px] font-black leading-[1.12] -tracking-[1px] relative z-10 mt-3">
                        {heading.heading}
                      </h2>
                    ))
                  }
                  {/* <h2 className="text-[#003777] text-2xl md:text-[40px] font-black leading-[1.12] -tracking-[1px] relative z-10 mt-3">
                    Do You Have Any Additional Questions?<br />If So, Contact Us!
                  </h2> */}
                </div>
                <div className="ip-section-divider"></div>
                <div className="space-y-6">
                  {
                    data?.acf?.section_2_fields?.descriptions.map((description, index) => (
                      <p key={index} className="text-[#434961] text-[16px] md:text-[17px] leading-[26px] md:leading-[28px] max-w-[520px]">
                        {description.description}
                      </p>
                    ))
                  }
                </div>
                <div className="flex gap-4 mt-2">
                  {
                    data?.acf?.section_2_fields?.social_links.map((link, index) => (
                      <a key={index} href="#" aria-label="Social media" className="w-12 h-12 rounded-full bg-[#e6f0ff] flex items-center justify-center text-[#003777] hover:bg-[#003777] hover:text-white hover:shadow-lg transition-all duration-400 text-lg">
                        <img src={link.social_icon.url} alt={link.social_icon.alt} className='w-3.5' />
                      </a>
                    ))
                  }
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <div className="sr-item ip-card ip-card-glass p-6 md:p-10 rounded-[24px]">
                <div className="mb-6">
                  <h3 className="text-[#003777] text-[22px] md:text-[24px] font-bold mb-3">Send Us a Message</h3>
                  <div className="ip-section-divider"></div>
                </div>
                <ContactForm />
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
