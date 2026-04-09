import React from 'react'
import PageHero from '@/components/PageHero'
import SectionReveal from '@/components/SectionReveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const metadata = {
  title: 'Contact Us',
  description:
    'Contact Remote Dosimetrist for expert radiation treatment planning. We offer a free first month of plans (up to 2/week). Reach us at contactus@remotedosimetrist.com.',
  alternates: {
    canonical: 'https://remotedosimetrist.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Remote Dosimetrist',
    description:
      'Contact us for expert remote dosimetry services. Free first month offer — no strings attached. Available nationwide.',
    url: 'https://remotedosimetrist.com/contact',
  },
}

export default function ContactPage() {
  return (
    <section className="ip-page-enter ip-grain bg-white">
      <PageHero
        title="Contact Us"
        subtitle="We're here to answer any questions you may have."
        breadcrumb="Contact Us"
      />

      {/* ── Info Cards ── */}
      <div className="ip-section ip-section-white py-12 md:py-24 relative">
        <div className="ip-ambient ip-ambient-1"></div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <SectionReveal stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="sr-item ip-card ip-card-hover-blue p-6 md:p-10 rounded-2xl text-center">
                <div className="flex flex-col items-center gap-5">
                  <div className="ip-card-icon w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] text-4xl transition-all duration-500">
                    <FontAwesomeIcon icon={faLocationDot} className="text-[#003777] transition-colors duration-500" />
                  </div>
                  <h3 className="text-[#003777] text-[22px] md:text-[26px] font-extrabold uppercase tracking-wide transition-colors duration-500">Area</h3>
                  <p className="text-[#434961] text-[16px] md:text-[17px] font-medium transition-colors duration-500">Nationwide</p>
                </div>
              </div>
              <div className="sr-item ip-card ip-card-hover-blue p-6 md:p-10 rounded-2xl text-center">
                <div className="flex flex-col items-center gap-5">
                  <div className="ip-card-icon w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] text-4xl transition-all duration-500">
                    <FontAwesomeIcon icon={faEnvelope} className="text-[#003777] transition-colors duration-500" />
                  </div>
                  <h3 className="text-[#003777] text-[22px] md:text-[26px] font-extrabold uppercase tracking-wide transition-colors duration-500">Email</h3>
                  <a href="mailto:contactus@remotedosimetrist.com" className="text-[#434961] text-[14px] md:text-[17px] font-medium transition-colors duration-500 break-all">
                    contactus@remotedosimetrist.com
                  </a>
                </div>
              </div>
              <div className="sr-item ip-card ip-card-hover-blue p-6 md:p-10 rounded-2xl text-center">
                <div className="flex flex-col items-center gap-5">
                  <div className="ip-card-icon w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] text-4xl transition-all duration-500">
                    <FontAwesomeIcon icon={faClock} className="text-[#003777] transition-colors duration-500" />
                  </div>
                  <h3 className="text-[#003777] text-[22px] md:text-[26px] font-extrabold uppercase tracking-wide transition-colors duration-500">Hours</h3>
                  <p className="text-[#434961] text-[16px] md:text-[17px] font-medium transition-colors duration-500">Available At All Times</p>
                </div>
              </div>
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
                  <span className="ip-label mb-3 block relative z-10">Get In Touch</span>
                  <h2 className="text-[#003777] text-2xl md:text-[40px] font-black leading-[1.12] -tracking-[1px] relative z-10 mt-3">
                    Do You Have Any Additional Questions?<br />If So, Contact Us!
                  </h2>
                </div>
                <div className="ip-section-divider"></div>
                <div className="space-y-6">
                  <p className="text-[#434961] text-[16px] md:text-[17px] leading-[26px] md:leading-[28px] max-w-[520px]">
                    We are so confident that you will appreciate and value our services, that we will create radiation plans for FREE for the first month from the date of the signed contract (maximum 2 plans per week). In essence, it&apos;s a &ldquo;try before you buy&rdquo; structure with no strings attached!
                  </p>
                  <p className="text-[#434961] text-[16px] md:text-[17px] leading-[26px] md:leading-[28px] max-w-[520px]">
                    We are more than happy to provide you references from other clients so that you may hear their experiences with us.
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  {[faFacebookF, faLinkedinIn, faTwitter, faInstagram].map((icon, i) => (
                    <a key={i} href="#" aria-label="Social media" className="w-12 h-12 rounded-full bg-[#e6f0ff] flex items-center justify-center text-[#003777] hover:bg-[#003777] hover:text-white hover:shadow-lg transition-all duration-400 text-lg">
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <div className="sr-item ip-card ip-card-glass p-6 md:p-10 rounded-[24px]">
                <div className="mb-6">
                  <h3 className="text-[#003777] text-[22px] md:text-[24px] font-bold mb-3">Send Us a Message</h3>
                  <div className="ip-section-divider"></div>
                </div>
                <form className="flex flex-col gap-4" action="mailto:contactus@remotedosimetrist.com" method="POST" encType="text/plain">
                  <input type="text" name="name" placeholder="Full Name" className="ip-form-input" required />
                  <input type="email" name="email" placeholder="Email Address" className="ip-form-input" required />
                  <input type="tel" name="phone" placeholder="Phone Number" className="ip-form-input" />
                  <textarea name="message" placeholder="Your Message" rows="5" className="ip-form-textarea" required></textarea>
                  <div className="flex flex-col gap-3 mt-1">
                    <span className="text-[#434961] font-semibold text-[14px]">Preferred method of communication</span>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="contact-method" value="email" className="w-5 h-5 accent-[#003777]" />
                        <span className="text-[#434961] text-[15px] group-hover:text-[#003777] transition-colors">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="contact-method" value="phone" className="w-5 h-5 accent-[#003777]" />
                        <span className="text-[#434961] text-[15px] group-hover:text-[#003777] transition-colors">Phone</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-start mt-5">
                    <button type="submit" className="ip-btn ip-btn-primary">Send Message <span>→</span></button>
                  </div>
                </form>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
