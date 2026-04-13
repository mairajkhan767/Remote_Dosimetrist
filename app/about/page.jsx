import React from 'react'
import { fetchPageBySlug } from "@/lib/api";
import PageHero from '@/components/PageHero'
import SectionReveal from '@/components/SectionReveal'
import GetInTouch from '@/components/GetInTouch'
import ReviewSlider from '@/components/ReviewSlider'
import Image from 'next/image';

export async function generateMetadata() {
  const data = await fetchPageBySlug("about-us");

  return {
    title: data?.yoast_head_json?.title,
    description: data?.yoast_head_json?.description,
  };
}
export default async function AboutPage() {
  const data = await fetchPageBySlug("about-us");
  return (
    <section className="ip-page-enter ip-grain">
      <PageHero
        title={data?.acf?.banner_fields?.page_title}
        subtitle={data?.acf?.banner_fields?.page_description}
        breadcrumb={data?.title?.rendered}
      />

      {/* ── Vision / Mission / Values ── */}
      <div className="ip-section ip-section-white py-16 md:py-32 relative">
        <div className="ip-ambient ip-ambient-1"></div>
        <div className="ip-ambient ip-ambient-2"></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <SectionReveal>
            <div className="text-center mb-12 md:mb-20">
              <span className="sr-item ip-label">{data?.acf?.section_1_fields?.heading}</span>
              <h2 className="sr-item text-[#003777] text-3xl md:text-[48px] font-bold md:leading-[52px] -tracking-[1.2px] mt-5">
                {data?.acf?.section_1_fields?.sub_heading}
              </h2>
              <div className="sr-item flex justify-center mt-7">
                <div className="ip-section-divider"></div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal stagger={0.18}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-center">
              {
                data?.acf?.section_1_fields?.foundations.map((item, index) => (
                  <div className="sr-item ip-card ip-card-hover-blue p-6 md:p-10 rounded-2xl" key={index}>
                    <div className="flex justify-center mb-7">
                      <div className="ip-card-icon w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] transition-all duration-500">
                        <Image src={item.icon.url} alt={item.icon.alt} width={item.icon.width} height={item.icon.height} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-500">{item.heading}</h3>
                      <p className="text-gray-600 text-[16px] lg:text-[20px] leading-relaxed transition-colors duration-500">
                        {item.description}
                      </p>
                  </div>
                ))
              }
              {/* <div className="sr-item ip-card ip-card-hover-blue p-6 md:p-10 rounded-2xl">
                <div className="flex justify-center mb-7">
                  <div className="ip-card-icon w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] transition-all duration-500">
                    <svg className="w-10 h-10 text-[#003777] transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-500">Our Vision</h3>
                <p className="text-gray-600 text-[16px] lg:text-[20px] leading-relaxed transition-colors duration-500">
                  Our vision is to create long and lasting partnerships with our clients and to share information within our network that improves workflow in every department.
                </p>
              </div>

              <div className="sr-item ip-card ip-card-hover-blue p-6 md:p-10 rounded-2xl">
                <div className="flex justify-center mb-7">
                  <div className="ip-card-icon w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] transition-all duration-500">
                    <svg className="w-10 h-10 text-[#003777] transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-500">Our Mission</h3>
                <p className="text-gray-600 text-[16px] lg:text-[20px] leading-relaxed transition-colors duration-500">
                  Our mission is to gain our clients&apos; trust and appreciation by providing the highest quality plans in the most efficient manner possible.
                </p>
              </div>

              <div className="sr-item ip-card ip-card-hover-blue p-6 md:p-10 rounded-2xl">
                <div className="flex justify-center mb-7">
                  <div className="ip-card-icon w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] transition-all duration-500">
                    <svg className="w-10 h-10 text-[#003777] transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-500">Our Values</h3>
                <p className="text-gray-600 text-[16px] lg:text-[20px] leading-relaxed transition-colors duration-500">
                  We value honesty, communication, fairness, consistency, and efficiency. All of our clients and their patients are treated with utmost care.
                </p>
              </div> */}
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="ip-glow-divider"></div>

      {/* ── Get To Know Us ── */}
      <div className="ip-section ip-section-light py-14 md:py-28 relative">
        <div className="ip-ambient ip-ambient-purple" style={{ top: '10%', right: '5%' }}></div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-stretch">
            <SectionReveal direction="left">
              <div className="sr-item flex flex-col gap-8 md:gap-12 h-full">
                <div className="flex flex-col gap-6 md:gap-8 p-6 md:p-12 flex-1" style={{ background: 'linear-gradient(45deg, #003777, #0E3CF6)', borderRadius: '32px' }}>
                  <div className="relative">
                    <div className="ip-dots -left-10 -top-10"></div>
                    <h2 className="text-2xl md:text-[42px] text-white -tracking-[1px] leading-[1.1] font-bold relative z-10">{data?.acf?.section_2_fields?.left_top_box.heading}</h2>
                  </div>
                  <p className="text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[30px]">
                    {data?.acf?.section_2_fields?.left_top_box.description_1}
                  </p>
                  <p className="text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[30px]">
                    {data?.acf?.section_2_fields?.left_top_box.description_2}
                  </p>
                  <a href={data?.acf?.section_2_fields?.left_top_box.button.url} className="ip-btn ip-btn-outline w-fit">{data?.acf?.section_2_fields?.left_top_box.button.title} <span>→</span></a>
                </div>
                <div className="ip-image-wrap">
                  <img src={data?.acf?.section_2_fields?.left_bottom_box.image.url} alt={data?.acf?.section_2_fields?.left_bottom_box.image.alt} className="w-full object-cover h-[200px] md:h-[300px]" />
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <div
                className="sr-item h-full relative isolate flex flex-col justify-start p-6 md:p-12 gap-8 rounded-[32px] bg-no-repeat bg-cover bg-center min-h-[400px] md:min-h-[700px]"
                style={{ backgroundImage: 'url(/assets/about-bg.jpg)', backgroundPosition: 'left', backgroundSize: 'cover' }}
              >
                <div className="absolute inset-0 rounded-[32px] pointer-events-none" style={{ backgroundImage: `url(${data?.acf?.section_2_fields?.right_box.image.url})` }}></div>
                <div className="z-10 flex flex-col gap-8">
                  <h2 className="text-2xl md:text-[42px] text-white -tracking-[1px] leading-[1.1] font-bold relative z-10">{data?.acf?.section_2_fields?.right_box.heading}</h2>
                  <p className="text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[30px]">
                    {data?.acf?.section_2_fields?.right_box.description_1}
                  </p>
                  <p className="text-white/90 text-[16px] md:text-[18px] leading-[28px] md:leading-[30px]">
                    {data?.acf?.section_2_fields?.right_box.description_2}
                  </p>
                  <a href={data?.acf?.section_2_fields?.right_box.button.url} className="ip-btn ip-btn-outline w-fit">{data?.acf?.section_2_fields?.right_box.button.title} <span>→</span></a>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>

      <div className="ip-glow-divider"></div>

      {/* ── Why Hire ── */}
      <div className="ip-section ip-section-white py-14 md:py-28 relative">
        <div className="ip-ambient ip-ambient-1" style={{ top: '-10%', left: '-15%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-left"></div>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <SectionReveal direction="left">
            <div className="sr-item flex flex-col justify-center relative">
              <span className="ip-label mb-5">{data?.acf?.section_3_fields?.sub_heading}</span>
              <h2 className="text-2xl md:text-[42px] font-bold text-gray-900 mb-6 leading-[1.15] -tracking-[1px]">{data?.acf?.section_3_fields?.heading}</h2>
              <div className="ip-section-divider mb-10"></div>
              <div className="space-y-6 text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[30px]">
                <p>{data?.acf?.section_3_fields?.description_1}</p>
                <p>{data?.acf?.section_3_fields?.description_2}</p>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal direction="right" parallax>
            <div className="sr-item ip-image-wrap">
              <img src={data?.acf?.section_3_fields?.image.url} alt={data?.acf?.section_3_fields?.image.alt} className="w-full object-cover h-[260px] md:h-[580px]" />
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="ip-glow-divider"></div>

      {/* ── Remote is Here to Stay ── */}
      <div className="ip-section ip-section-light py-14 md:py-28 relative">
        <div className="ip-ambient ip-ambient-2" style={{ bottom: '0', right: '-10%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-right"></div>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <SectionReveal direction="left" parallax>
            <div className="sr-item ip-image-wrap">
              <img src={data?.acf?.section_4_fields?.image.url} alt={data?.acf?.section_4_fields?.image.alt} className="w-full object-cover h-[260px] md:h-[580px]" />
            </div>
          </SectionReveal>
          <SectionReveal direction="right">
            <div className="sr-item flex flex-col justify-center relative">
              <span className="ip-label mb-5">{data?.acf?.section_4_fields?.sub_heading}</span>
              <h2 className="text-2xl md:text-[42px] font-bold text-gray-900 mb-6 leading-[1.15] -tracking-[1px]">{data?.acf?.section_4_fields?.sub_heading}</h2>
              <div className="ip-section-divider mb-10"></div>
              <div className="space-y-6 text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[30px]">
                <p>{data?.acf?.section_3_fields?.description_1}</p>
                <p>{data?.acf?.section_3_fields?.description_2}</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      <div
        className="review-section w-full"
        style={{ backgroundImage: 'url("/assets/18773521_6022556_Artboard 1.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
      >
        <ReviewSlider data={null} />
        <GetInTouch data={null} />
      </div>
    </section>
  )
}
