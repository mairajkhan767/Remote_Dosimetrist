import React from 'react'
import PageHero from '@/components/PageHero'
import SectionReveal from '@/components/SectionReveal'
import GetInTouch from '@/components/GetInTouch'
import ReviewSlider from '@/components/ReviewSlider'

export const metadata = {
  title: 'Areas of Focus',
  description:
    'Expert dosimetry planning across every region of the body — Pelvis, Head & Neck, Chest, Pediatrics, Breast, CNS, and more. Fast turnaround with 15+ years of experience.',
  alternates: {
    canonical: 'https://remotedosimetrist.com/areas',
  },
  openGraph: {
    title: 'Areas of Focus | Remote Dosimetrist',
    description:
      'Expert dosimetry planning for Pelvis, Head & Neck, Chest, Pediatrics, Breast, CNS and every region of the body.',
    url: 'https://remotedosimetrist.com/areas',
  },
  keywords: [
    'radiation dosimetry areas',
    'pelvis radiation planning',
    'head neck radiation',
    'pediatric dosimetry',
    'breast radiation planning',
    'CNS dosimetry',
    'VMAT planning',
  ],
}

const areas = [
  {
    title: 'Pelvis',
    image: '/assets/pelvis.jpg',
    text: 'Focusing on larger and more irregularly shaped pelvic target volumes, VMAT provides substantial dose conformity over previously standard three-dimensional radiation treatment planning. This has allowed for radiation dose escalation due to often studied reduced side effects with VMAT technique.',
  },
  {
    title: 'Head & Neck',
    image: '/assets/headneck.jpg',
    text: 'Head and neck cancers have often been associated with very difficult and time-consuming radiation treatment planning. When IMRT was introduced, the difficult issue of treating the posterior neck lymph nodes was finally solved. VMAT offered the additional solution of time, reduction in monitor units, and improved dose reduction of organs at risk.',
  },
  {
    title: 'Chest',
    image: '/assets/chest.jpg',
    text: 'Lung irradiation has always presented a dosimetry problem with doses above 20Gy to the nearby healthy lung. VMAT has allowed higher doses to be delivered than previous generations of radiation dosimetry planning. Stereotactic body radiation therapy (SBRT) delivers high levels of radiation to the tumor.',
  },
  {
    title: 'Pediatrics',
    image: '/assets/Pediatric.jpg',
    text: 'Radiation has always been a cancer treatment that has been attempted to be reduced and/or avoided due to the long-term side effects that it can have on growth and cognitive function development. When radiation has decided to be given, dosimetry must be handled with extreme care.',
  },
  {
    title: 'Breast',
    image: '/assets/RtBreast.jpg',
    text: 'One of the few radiation dosimetry techniques that has not thoroughly changed over time. Whole breast radiation has been considered the standard of care using three-dimensional radiation planning techniques. Novel approaches with deep inspiration breath hold with gating reduce radiation to healthy lung and heart.',
  },
  {
    title: 'CNS',
    image: '/assets/brain.jpg',
    text: 'Standard of care for primary brain tumors is VMAT. In recent years, VMAT has been used for palliative radiation dosimetry as well. Stereotactic radiosurgery can deliver extremely high doses to individual brain mets with as little as only one isocenter.',
  },
]

export default function AreasPage() {
  return (
    <section className="ip-page-enter ip-grain">
      <PageHero
        title="Areas of Focus"
        subtitle="Expert dosimetry planning across every region of the body."
        breadcrumb="Areas of Focus"
      />

      <div className="ip-section ip-section-white py-16 md:py-32 relative">
        <div className="ip-ambient ip-ambient-1"></div>
        <SectionReveal>
          <div className="max-w-[1000px] mx-auto text-center px-6 gap-6 flex flex-col items-center relative z-10">
            <span className="sr-item ip-label">Specialized Expertise</span>
            <h2 className="sr-item text-[#003777] text-3xl md:text-[48px] font-bold md:leading-[52px] -tracking-[1.2px]">
              Helping Make Your Life Easier
            </h2>
            <div className="sr-item flex justify-center">
              <div className="ip-section-divider"></div>
            </div>
            <p className="sr-item text-[#434961] text-base md:text-[20px] leading-[28px] md:leading-[34px] -tracking-[0.3px] max-w-[720px] mt-3">
              High quality dosimetry planning and quick turnaround times, designed to let you focus on what matters most — your patients.
            </p>
          </div>
        </SectionReveal>
      </div>

      {areas.map((area, index) => {
        const isEven = index % 2 === 0
        const num = String(index + 1).padStart(2, '0')
        const bgClass = isEven ? 'ip-section-white' : 'ip-section-light'

        return (
          <React.Fragment key={area.title}>
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
                          <img src={area.image} alt={area.title} className="w-full object-cover object-center h-[260px] md:h-[480px]" />
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
                          <h3 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">{area.title}</h3>
                          <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px] max-w-[560px]">{area.text}</p>
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
                We Cover Every Aspect of the Body
              </h2>
              <p className="sr-item text-white/70 text-base md:text-[19px] leading-[28px] md:leading-[32px] font-light max-w-[640px]">
                The regions listed above are not our only target areas. We provide remote dosimetry services for every part of the body.
              </p>
            </div>
            <div className="sr-item grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto mb-10 md:mb-12">
              {[
                { value: '10+', label: 'Years Experience', sub: 'Per dosimetrist, minimum' },
                { value: '24h', label: 'Turnaround Time', sub: 'Plans ready for review' },
                { label: 'HIPAA Compliant', sub: 'Fully secure remote access' },
              ].map((stat, i) => (
                <div key={i} className="rounded-2xl p-6 flex items-center gap-5" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))' }}>
                    <span className="text-white text-[22px] font-bold">{stat.value || '✓'}</span>
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-semibold leading-tight">{stat.label}</p>
                    <p className="text-white/50 text-[13px] mt-1">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="sr-item flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a href="/contact" className="ip-btn ip-btn-outline">Contact Us <span>→</span></a>
              <a href="/plans" className="ip-btn ip-btn-outline w-fit">View Our Plans <span>→</span></a>
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
