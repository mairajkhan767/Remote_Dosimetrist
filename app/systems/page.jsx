import React from 'react'
import PageHero from '@/components/PageHero'
import SectionReveal from '@/components/SectionReveal'
import GetInTouch from '@/components/GetInTouch'
import ReviewSlider from '@/components/ReviewSlider'
import { fetchPageBySlug } from "@/lib/api";

export async function generateMetadata() {
  const data = await fetchPageBySlug("systems");

  return {
    title: data?.yoast_head_json?.title,
    description: data?.yoast_head_json?.description,
  };
}

export default async function SystemsPage() {
  const data = await fetchPageBySlug("systems");
  console.log('Systems Page Data:', data);
  return (
    <section className="ip-page-enter ip-grain">
      <PageHero
        title={data?.acf?.banner_section?.page_title}
        subtitle={data?.acf?.banner_section?.page_description}
        breadcrumb={data?.title?.rendered}
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
      </div>

      {data?.acf?.section_2_fields.map((system, index) => {
        const isEven = index % 2 === 0
        const num = String(index + 1).padStart(2, '0')
        const bgClass = isEven ? 'ip-section-light' : 'ip-section-white'

        return (
          <React.Fragment key={system.heading}>
            <div className="ip-glow-divider"></div>
            <div className={`ip-section ${bgClass} py-12 md:py-24 relative`}>
              {isEven && <div className="ip-ambient ip-ambient-1"></div>}
              {!isEven && <div className="ip-ambient ip-ambient-2"></div>}
              <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <SectionReveal direction={isEven ? 'left' : 'right'}>
                  <div className="sr-item group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                      <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                        <div className="ip-image-wrap relative">
                          <img src={system.image.url} alt={system.image.alt} className="w-full object-cover object-center h-[260px] md:h-[480px]" />
                          <div className="absolute bottom-5 left-6 z-10">
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-[14px] font-bold" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.20)' }}>
                              {num}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="relative flex flex-col gap-6">
                          <div className="flex items-center gap-4">
                            <div className="ip-number-badge">{num}</div>
                            <div className="ip-accent-line"></div>
                          </div>
                          <h3 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">{system.heading}</h3>
                          {
                            system?.all_descriptions.map((t, i) => (
                              <p key={i} className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px] max-w-[560px]">{t.description}</p>
                            )
                          )}
                          <a href={system.button.url} className="ip-btn ip-btn-primary w-fit mt-3">{system.button.title} <span>→</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </React.Fragment>
        )
      })}

      {/* ── System Logos ── */}
      <div className="w-full flex flex-col justify-center items-center py-16 md:py-24 px-6 gap-8 md:gap-10">
        <h3 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1] text-center">{data?.acf.section_3_fields.heading}</h3>
        <p className="text-[#434961] max-w-4xl text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px] text-center">
          {data?.acf?.section_3_fields.description}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl">
          {data?.acf?.section_3_fields.systems.map((logo) => (
            <div key={logo.text} className="flex flex-col justify-between items-center border rounded-2xl border-gray-200 p-4 md:p-6 gap-4">
              <img src={logo.image.url} alt={logo.image.alt} className="w-full max-h-20 object-contain" />
              <span className="text-[#003777] text-sm md:text-[16px] font-bold -tracking-[0.2px] text-center">{logo.text}</span>
            </div>
          ))}
        </div>
        <a href={data?.acf?.section_3_fields.button.url} className="ip-btn ip-btn-primary w-fit mt-3">
          {data?.acf?.section_3_fields.button.title} <span>→</span>
        </a>
      </div>

      <div className="review-section w-full" style={{ backgroundImage: 'url("/assets/18773521_6022556_Artboard 1.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <ReviewSlider data={null} />
        <GetInTouch data={null} />
      </div>
    </section>
  )
}
