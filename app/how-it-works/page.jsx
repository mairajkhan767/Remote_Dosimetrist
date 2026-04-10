import React from 'react'
import PageHero from '@/components/PageHero'
import SectionReveal from '@/components/SectionReveal'
import GetInTouch from '@/components/GetInTouch'
import ReviewSlider from '@/components/ReviewSlider'
import { fetchPageBySlug } from "@/lib/api";

export async function generateMetadata() {
  const data = await fetchPageBySlug("how-it-works");

  return {
    title: data?.yoast_head_json?.title,
    description: data?.yoast_head_json?.description,
  };
}

export default async function HowItWorksPage() {
  const data = await fetchPageBySlug("how-it-works");
  console.log(data);
  return (
    <section className="ip-page-enter ip-grain">
      <PageHero
         title={data?.acf?.banner_section?.page_title}
        subtitle={data?.acf?.banner_section?.page_description}
        breadcrumb={data?.title.rendered}
      />

      {/* ── Overview ── */}
      <div className="ip-section ip-section-light py-14 md:py-28 relative">
        <div className="ip-ambient ip-ambient-purple" style={{ top: '10%', left: '60%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-left"></div>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <SectionReveal direction="left" parallax>
            <div className="sr-item ip-image-wrap">
              <img src={data?.acf?.section_1_fields?.image.url} alt={data?.acf?.section_1_fields?.image.alt} className="w-full object-cover" />
            </div>
          </SectionReveal>
          <SectionReveal direction="right">
            <div className="sr-item flex flex-col gap-7 relative">
              <span className="ip-label">{data?.acf?.section_1_fields?.sub_heading}</span>
              <h2 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">{data?.acf?.section_1_fields?.heading}</h2>
              <div className="ip-section-divider"></div>
              {
                data?.acf?.section_1_fields?.all_description.map((desc,index) => (
                  <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]" key={index}>
                    {desc.description}
                  </p>
                )) 
              }
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="ip-glow-divider"></div>

      {/* ── Methods ── */}
      <div className="ip-section ip-section-white py-14 md:py-28 relative">
        <div className="ip-ambient ip-ambient-2" style={{ top: '-5%', right: '-10%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-right"></div>
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-8 md:gap-16 items-center relative z-10">
          <SectionReveal direction="right" className="lg:order-2 w-1/4" parallax>
            <div className="sr-item ip-image-wrap">
              <img src={data?.acf?.section_2_fields?.image.url} alt={data?.acf?.section_2_fields?.image.alt} className="w-full object-cover" />
            </div>
          </SectionReveal>
          <SectionReveal direction="left" className="lg:order-1 w-9/12">
            <div className="sr-item flex flex-col gap-7 relative">
              <span className="ip-label">{data?.acf?.section_2_fields?.sub_heading}</span>
              <h2 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">{data?.acf?.section_2_fields?.heading}</h2>
              <div className="ip-section-divider"></div>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                {data?.acf?.section_2_fields?.description}
              </p>
              {
                data?.acf?.section_2_fields?.methods.map((desc,index) => (
                  <div
                    key={index}
                    className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px] flex flex-row gap-1"
                  >
                    <strong>{index + 1}) </strong>
                    <span dangerouslySetInnerHTML={{ __html: desc.method }} />
                  </div>
                ))
              }
              <a href={data?.acf?.section_2_fields?.button.url} className="ip-btn ip-btn-primary w-fit mt-3">{data?.acf?.section_2_fields?.button.title} <span>→</span></a>
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="ip-section ip-section-light py-14 md:py-28 relative">
        <div className="ip-ambient ip-ambient-purple" style={{ top: '10%', left: '60%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-left"></div>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <SectionReveal direction="left" parallax>
            <div className="sr-item ip-image-wrap">
              <img src={data?.acf?.section_3_fields?.image.url} alt={data?.acf?.section_3_fields?.image.alt} className="w-full object-cover h-[260px] md:h-[480px]" />
            </div>
          </SectionReveal>
          <SectionReveal direction="right">
            <div className="sr-item flex flex-col gap-7 relative">
              <span className="ip-label">{data?.acf?.section_3_fields?.sub_heading}</span>
              <h2 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">{data?.acf?.section_3_fields?.heading}</h2>
              <div className="ip-section-divider"></div>
              {
                data?.acf.section_3_fields?.all_description.map((desc, index) => (
                  <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]" key={index}>
                    {desc.description}
                  </p>
                ))
              }
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="review-section w-full" style={{ backgroundImage: 'url("/assets/18773521_6022556_Artboard 1.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <ReviewSlider data={null} />
        <GetInTouch data={null} />
      </div>
    </section>
  )
}
