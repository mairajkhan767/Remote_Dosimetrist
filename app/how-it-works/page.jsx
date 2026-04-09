import React from 'react'
import PageHero from '@/components/PageHero'
import SectionReveal from '@/components/SectionReveal'
import GetInTouch from '@/components/GetInTouch'
import ReviewSlider from '@/components/ReviewSlider'

export const metadata = {
  title: 'How It Works',
  description:
    'Learn how Remote Dosimetrist works — free first month, HIPAA-compliant connection setup, and secure remote access to your treatment planning system. No minimum retainer required.',
  alternates: {
    canonical: 'https://remotedosimetrist.com/how-it-works',
  },
  openGraph: {
    title: 'How It Works | Remote Dosimetrist',
    description:
      'Free first month, no minimum retainer, HIPAA-compliant. Learn how our remote dosimetry service integrates with your clinic.',
    url: 'https://remotedosimetrist.com/how-it-works',
  },
}

export default function HowItWorksPage() {
  return (
    <section className="ip-page-enter ip-grain">
      <PageHero
        title="How it Works"
        subtitle="Secure, HIPAA-compliant remote access to your treatment planning systems."
        breadcrumb="How It Works"
      />

      {/* ── Overview ── */}
      <div className="ip-section ip-section-light py-14 md:py-28 relative">
        <div className="ip-ambient ip-ambient-purple" style={{ top: '10%', left: '60%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-left"></div>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <SectionReveal direction="left" parallax>
            <div className="sr-item ip-image-wrap">
              <img src="/assets/1-2.jpg" alt="Secure remote dosimetry process" className="w-full object-cover" />
            </div>
          </SectionReveal>
          <SectionReveal direction="right">
            <div className="sr-item flex flex-col gap-7 relative">
              <span className="ip-label">Your Data, Your System</span>
              <h2 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">Get to Know How it Works</h2>
              <div className="ip-section-divider"></div>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                We are so confident that you will appreciate and value our services, that we will create radiation plans for FREE for the first month from the date of the signed contract (maximum 2 plans per week). It&apos;s a &ldquo;try before you buy&rdquo; structure with no strings attached!
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                We are more than happy to provide you references from other clients so that you may hear their experiences with us and be more at ease with the remote process.
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                Remote Dosimetrist is available to plan for your department whenever you need additional dosimetry resources. Unlike other larger remote dosimetry companies, we do not enforce a minimum monthly retainer for our services.
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                Typically, the process is started by connecting via email, the phone, or even a virtual meeting (such as Zoom) to discuss your department&apos;s current needs and to address any concerns.
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                If all ends well and you decide that you want to proceed with our services, we would execute a typical HIPAA agreement and contractor business associate agreement.
              </p>
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
              <img src="/assets/2-2.jpg" alt="Why hire a remote dosimetrist" className="w-full object-cover" />
            </div>
          </SectionReveal>
          <SectionReveal direction="left" className="lg:order-1 w-9/12">
            <div className="sr-item flex flex-col gap-7 relative">
              <span className="ip-label">The Smart Choice</span>
              <h2 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">Various Methods</h2>
              <div className="ip-section-divider"></div>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                This can be accomplished by such methods as (often include enabling two-factor authentication for remote network access):
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                <strong>1)</strong> Direct Citrix access to your server and treatment planning system:{' '}
                <a className="text-[#003777]" href="https://www.citrix.com/solutions/healthcare/" target="_blank" rel="noopener noreferrer">https://www.citrix.com/solutions/healthcare/</a>
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                <strong>2)</strong> RSA SecurID which gives highly secure VPN access.{' '}
                <a className="text-[#003777]" href="https://www.rsa.com/en-us/products/rsa-securid-suite/rsa-securid-access" target="_blank" rel="noopener noreferrer">https://www.rsa.com/en-us/products/rsa-securid-suite/rsa-securid-access</a>
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                <strong>3)</strong> Imprivata ID which gives highly secure VPN access.{' '}
                <a className="text-[#003777]" href="https://www.imprivata.com/remote-access" target="_blank" rel="noopener noreferrer">https://www.imprivata.com/remote-access</a>
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                <strong>4)</strong> VMWare Horizon which via personal password grants access to a local on-site desktop.{' '}
                <a className="text-[#003777]" href="https://www.vmware.com/ca/products/horizon.html" target="_blank" rel="noopener noreferrer">https://www.vmware.com/ca/products/horizon.html</a>
              </p>
              <a href="/contact" className="ip-btn ip-btn-primary w-fit mt-3">Get Started <span>→</span></a>
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
              <img src="/assets/information.jpg" alt="Secure remote dosimetry process" className="w-full object-cover h-[260px] md:h-[480px]" />
            </div>
          </SectionReveal>
          <SectionReveal direction="right">
            <div className="sr-item flex flex-col gap-7 relative">
              <span className="ip-label">Your Data, Your System</span>
              <h2 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">Additional Information</h2>
              <div className="ip-section-divider"></div>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                Unlike other dosimetry companies that require that you send them DICOM files, we will NEVER be in possession of your legally protected patient information. We calculate YOUR plans on YOUR system with YOUR beam data.
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                We aim to provide the highest quality remote dosimetry services to prevent bottlenecks during staff vacancies or unexpected spikes in patient volume.
              </p>
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
