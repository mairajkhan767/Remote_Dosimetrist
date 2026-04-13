import React from 'react'
import PageHero from '@/components/PageHero'
import SectionReveal from '@/components/SectionReveal'
import GetInTouch from '@/components/GetInTouch'
import ReviewSlider from '@/components/ReviewSlider'
import { fetchPageBySlug } from "@/lib/api";

export async function generateMetadata() {
  const data = await fetchPageBySlug("areas-of-focus");

  return {
    title: data?.yoast_head_json?.title,
    description: data?.yoast_head_json?.description,
  };
}

export default async function AreasPage() {
  const data = await fetchPageBySlug("areas-of-focus");
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
            <h2 className="sr-item text-[#003777] text-3xl md:text-[48px] font-bold md:leading-[52px] -tracking-[1.2px]">
              {data?.acf?.section_1_fields?.heading}
            </h2>
            <div className="sr-item flex justify-center">
              <div className="ip-section-divider"></div>
            </div>
            <p className="sr-item text-[#434961] text-base md:text-[20px] leading-[28px] md:leading-[34px] -tracking-[0.3px] max-w-[720px] mt-3">
              {data?.acf?.section_1_fields?.description}
            </p>
          </div>
        </SectionReveal>
      </div>

      {data?.acf?.section_2_fields.map((area, index) => {
        const isEven = index % 2 === 0
        const num = String(index + 1).padStart(2, '0')
        const bgClass = isEven ? 'ip-section-white' : 'ip-section-light'

        return (
          <React.Fragment key={area.heading}>
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
                          <img src={area.image.url} alt={area.image.alt} className="w-full object-cover object-center h-[260px] md:h-[480px]" />
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
                          <h3 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">{area.heading}</h3>
                          <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px] max-w-[560px]">{area.description}</p>
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

      {/* ── CTA ── */}
      <div className="relative overflow-hidden py-16 md:py-32" style={{ background: 'linear-gradient(135deg, #001d40 0%, #003777 40%, #0A388D 70%, #0E3CF6 100%)' }}>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <SectionReveal>
            <div className="text-center mb-10 md:mb-16 flex flex-col items-center gap-6">
              <h2 className="sr-item text-white text-2xl md:text-[48px] font-extrabold -tracking-[1.2px] leading-[1.08]">
                {data?.acf?.section_3_fields?.heading}
              </h2>
              <p className="sr-item text-white/70 text-base md:text-[19px] leading-[28px] md:leading-[32px] font-light max-w-[640px]">
                {data?.acf?.section_3_fields?.description}
              </p>
            </div>
            <div className="sr-item grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto mb-10 md:mb-12">
              {data?.acf?.section_3_fields?.highlights.map((stat, i) => (
                <div key={i} className="rounded-2xl p-6 flex items-center gap-5" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))' }}>
                    <span className="text-white text-[22px] font-bold">{stat.highlight_value || '✓'}</span>
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-semibold leading-tight">{stat.highlight_heading}</p>
                    <p className="text-white/50 text-[13px] mt-1">{stat.highlight_description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="sr-item flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a href={data?.acf?.section_3_fields?.button_1.url} className="ip-btn ip-btn-outline">{data?.acf?.section_3_fields?.button_1.title} <span>→</span></a>
              <a href={data?.acf?.section_3_fields?.button_2.url} className="ip-btn ip-btn-outline w-fit">{data?.acf?.section_3_fields?.button_2.title} <span>→</span></a>
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
