import React from 'react'
import PageHero from '@/components/PageHero'
import SectionReveal from '@/components/SectionReveal'
import GetInTouch from '@/components/GetInTouch'
import ReviewSlider from '@/components/ReviewSlider'
import { fetchPageBySlug } from "@/lib/api";

export async function generateMetadata() {
  const data = await fetchPageBySlug("process");

  return {
    title: data?.yoast_head_json?.title,
    description: data?.yoast_head_json?.description,
  };
}

export default async function ProcessPage() {
  const data = await fetchPageBySlug("process");
  return (
    <section className="ip-page-enter ip-grain">
      <PageHero
        title={data?.acf?.banner_section?.page_title}
        subtitle={data?.acf?.banner_section?.page_description}
        breadcrumb={data?.title.rendered}
      />

      <div className="ip-section ip-section-white py-16 md:py-32 relative">
        <div className="ip-ambient ip-ambient-1"></div>
        <SectionReveal>
          <div className="max-w-[1000px] mx-auto text-center px-6 gap-6 flex flex-col items-center relative z-10">
            <span className="sr-item ip-label">{data?.acf?.section_1_fields?.sub_heading}</span>
            <h2 className="sr-item text-[#003777] text-3xl md:text-[48px] font-bold md:leading-[52px] -tracking-[1.2px]">{data?.acf?.section_1_fields?.heading}</h2>
            <div className="sr-item flex justify-center"><div className="ip-section-divider"></div></div>
            <p className="sr-item text-[#434961] text-base md:text-[20px] leading-[28px] md:leading-[34px] -tracking-[0.3px] max-w-[700px] mt-3">
              {data?.acf?.section_1_fields?.description}
            </p>
          </div>
        </SectionReveal>

        <SectionReveal stagger={0.12} className="max-w-[1400px] mx-auto px-6 mt-16 md:mt-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {data?.acf?.section_1_fields.methods.map((method, index) => {
              const num = String(index + 1).padStart(2, '0')
              return(
                <div key={index} className="sr-item ip-card p-6 md:p-10 rounded-[24px] flex flex-col gap-6 group">
                  <div className="flex items-center gap-4">
                    <div className="ip-number-badge">{num}</div>
                    <div className="ip-accent-line"></div>
                  </div>
                  <h3 className="text-[#003777] text-xl md:text-[26px] font-bold -tracking-[0.5px]">{method.method_heading}</h3>
                  <p className="text-[#434961] text-[16px] md:text-[17px] leading-[26px] md:leading-[28px] max-w-[440px]">{method.description}</p>
                  <a href={method.learn_more.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#003777] font-semibold text-[14px] hover:text-[#0E3CF6] transition-colors mt-auto">
                    {method.learn_more.title} <span>→</span>
                  </a>
                </div>
              )
            })}
          </div>
        </SectionReveal>
      </div>

      <div className="ip-glow-divider"></div>

      <div className="ip-section ip-section-light py-14 md:py-28 relative">
        <div className="ip-ambient ip-ambient-purple" style={{ top: '10%', left: '60%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-left"></div>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <SectionReveal direction="left" parallax>
            <div className="sr-item ip-image-wrap">
              <img src={data?.acf?.section_2_fields?.image.url} alt={data?.acf?.section_2_fields?.image.alt} className="w-full object-cover h-[260px] md:h-[480px]" />
            </div>
          </SectionReveal>
          <SectionReveal direction="right">
            <div className="sr-item flex flex-col gap-7 relative">
              <span className="ip-label">{data?.acf?.section_2_fields?.sub_heading}</span>
              <h2 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">{data?.acf?.section_2_fields?.heading}</h2>
              <div className="ip-section-divider"></div>
              {
                data?.acf?.section_2_fields?.all_descriptions.map((paragraph, index) => (
                  <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px] max-w-[560px]" key={index}>
                    {paragraph.description}
                  </p>
                ))
              }
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="ip-glow-divider"></div>

      <div className="ip-section ip-section-white py-14 md:py-28 relative">
        <div className="ip-ambient ip-ambient-2" style={{ top: '-5%', right: '-10%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-right"></div>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <SectionReveal direction="right" className="lg:order-2" parallax>
            <div className="sr-item ip-image-wrap">
              <img src={data?.acf?.section_3_fields?.image.url} alt={data?.acf?.section_3_fields?.image.alt} className="w-full object-cover h-[260px] md:h-[480px]" />
            </div>
          </SectionReveal>
          <SectionReveal direction="left" className="lg:order-1">
            <div className="sr-item flex flex-col gap-7 relative">
              <span className="ip-label">{data?.acf?.section_3_fields?.sub_heading}</span>
              <h2 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">{data?.acf?.section_3_fields?.heading}</h2>
              <div className="ip-section-divider"></div>
              {
                data?.acf?.section_3_fields?.all_descriptions.map((paragraph, index) => (
                  <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px] max-w-[560px]" key={index}>
                    {paragraph.description}
                  </p>
                ))
              }
              <a href={data?.acf?.section_3_fields?.button.url} className="ip-btn ip-btn-primary w-fit mt-3">{data?.acf?.section_3_fields?.button.title} <span>→</span></a>
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
