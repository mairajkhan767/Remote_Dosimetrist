import React from "react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import GetInTouch from "../components/GetInTouch";
import ReviewSlider from "../components/review-slider";

const methods = [
  {
    number: "01",
    title: "Direct Citrix Access",
    description: "Direct Citrix access to your server and treatment planning system.",
    link: "https://www.citrix.com/solutions/healthcare/",
    linkText: "Learn more about Citrix",
  },
  {
    number: "02",
    title: "RSA SecurID",
    description:
      "RSA SecurID gives highly secure VPN access to your server and treatment planning system. A user must enter a personal PIN to ensure that unsecured access is not granted.",
    link: "https://www.rsa.com/en-us/products/rsa-securid-suite/rsa-securid-access",
    linkText: "Learn more about RSA",
  },
  {
    number: "03",
    title: "Face ID (alongside fingerprint)",
    description:
      "Face ID provides a secure way to access your treatment planning system. A user must use their face or fingerprint on their device to ensure that unsecured access is not granted.",
    link: "https://www.apple.com/ios/feature-phones/",
    linkText: "Learn more about Face ID",
  },
  {
    number: "04",
    title: "VMWare Horizon",
    description:
      "VMWare Horizon via personal password grants access to a local on-site desktop",
    link: "https://www.vmware.com/ca/products/horizon.html",
    linkText: "Learn more about VMWare",
  },
];

export default function HowItWorks() {
  return (
    <section className="ip-page-enter ip-grain">
      {/* ── Hero ── */}
      <PageHero
        title="How it Works"
        subtitle="Secure, HIPAA-compliant remote access to your treatment planning systems."
        breadcrumb="How It Works"
      />

      {/* ── Additional Information ── */}
      <div className="ip-section ip-section-light py-14 md:py-28 relative">
        <div className="ip-ambient ip-ambient-purple" style={{ top: '10%', left: '60%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-left"></div>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <SectionReveal direction="left" parallax>
            <div className="sr-item ip-image-wrap">
              <img
                src="/assets/1-2.jpg"
                alt="Secure remote dosimetry process"
                className="w-full object-cover"
              />
            </div>
          </SectionReveal>

          <SectionReveal direction="right">
            <div className="sr-item flex flex-col gap-7 relative">
              <span className="absolute -top-4 right-0 text-[80px] md:text-[160px] font-black leading-none select-none pointer-events-none text-[#003777]/[0.03]">01</span>
              <span className="ip-label">Your Data, Your System</span>
              <h2 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">
                Get to Know How it Works
              </h2>
              <div className="ip-section-divider"></div>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                We are so confident that you will appreciate and value our services, that we will create radiation plans for FREE for the first month from the date of the signed contract (maximum 2 plans per week for the first month).  In essence, it's a "try before you buy" structure with no strings attached! 
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                We are more than happy to provide you references from other clients so that you may hear their experiences with us and be more at ease with the remote process.
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                Remote Dosimetrist is available to plan for your department whenever you need additional dosimetry resources. Unlike other larger remote dosimetry companies, we do not enforce a minimum monthly retainer for our services.
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                Typically, the process is started by connecting via email, the phone, or even a virtual meeting (such as Zoom) to discuss your department's current needs and to address any concerns that you may have going forward with remote dosimetry.
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                If all ends well and you decide that you want to proceed with our services, we would execute a typical HIPAA agreement and contractor business associate agreement.
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                Once a contract has been setup to legally protect your cancer center/hospital and your data, we set up a secure and encrypted, HIPAA-compliant connection to your department's server and treatment planning system. We are extremely flexible on methods to integrate with your clinic's IT department's pre-established remote working protocols.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* ── Glow Divider ── */}
      <div className="ip-glow-divider"></div>

      {/* ── Why Hire Section ── */}
      <div className="ip-section ip-section-white py-14 md:py-28 relative">
        <div className="ip-ambient ip-ambient-2" style={{ top: '-5%', right: '-10%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-right"></div>

        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-8 md:gap-16 items-center relative z-10">
          <SectionReveal direction="right" className="lg:order-2 w-1/4" parallax>
            <div className="sr-item ip-image-wrap">
              <img
                src="/assets/2-2.jpg"
                alt="Why hire a remote dosimetrist"
                className="w-full object-cover"
              />
            </div>
          </SectionReveal>

          <SectionReveal direction="left" className="lg:order-1 w-9/12">
            <div className="sr-item flex flex-col gap-7 relative">
              <span className="absolute -top-4 right-0 text-[80px] md:text-[160px] font-black leading-none select-none pointer-events-none text-[#003777]/[0.03]">02</span>
              <span className="ip-label">The Smart Choice</span>
              <h2 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">
                Various Methods
              </h2>
              <div className="ip-section-divider"></div>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                This can be accomplished by such methods as (often include enabling two-factor authentication for remote network access)(not an inclusive list):
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                <strong>1)</strong> Direct Citrix access to your server and treatment planning system: <a className="text-[#003777]" href="https://www.citrix.com/solutions/healthcare/" target="_blank" rel="noopener">https://www.citrix.com/solutions/healthcare/</a>
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                <strong>2)</strong> RSA SecurID which gives highly secure VPN access to your server and treatment planning system.&nbsp; A user must enter a personal PIN to ensure that unsecured access is not granted: <br/><a className="text-[#003777]" href="https://www.rsa.com/en-us/products/rsa-securid-suite/rsa-securid-access" target="_blank" rel="noopener">https://www.rsa.com/en-us/products/rsa-securid-suite/rsa-securid-access</a>
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                <strong>3)</strong> Imprivata ID which gives highly secure VPN access to your server and treatment planning system .&nbsp; A user must use their fingerprint on their device to ensure that unsecured access is not granted:  <br/><a className="text-[#003777]" href="https://www.imprivata.com/remote-access" target="_blank" rel="noopener">https://www.imprivata.com/remote-access</a>
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                <strong>4)</strong> VMWare Horizon which via personal password grants access to a local on-site desktop.&nbsp; Access to the treatment planning system is granted via the on-site desktop:  <br/><a className="text-[#003777]" href="https://www.vmware.com/ca/products/horizon.html" target="_blank" rel="noopener">https://www.vmware.com/ca/products/horizon.html</a>
              </p>
              <button className="ip-btn ip-btn-primary w-fit mt-3">
                Get Started <span>→</span>
              </button>
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
              <img
                src="/assets/information.jpg"
                alt="Secure remote dosimetry process"
                className="w-full object-cover h-[260px] md:h-[480px]"
              />
            </div>
          </SectionReveal>

          <SectionReveal direction="right">
            <div className="sr-item flex flex-col gap-7 relative">
              <span className="absolute -top-4 right-0 text-[80px] md:text-[160px] font-black leading-none select-none pointer-events-none text-[#003777]/[0.03]">03</span>
              <span className="ip-label">Your Data, Your System</span>
              <h2 className="text-[#003777] text-2xl md:text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">
                Additional Information
              </h2>
              <div className="ip-section-divider"></div>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                Unlike other dosimetry companies that require that you send them
                DICOM files, we will NEVER be in possession of your legally
                protected patient information. We calculate YOUR plans on YOUR
                system with YOUR beam data.
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                Once we learn your Radiation Oncologist preferences and department
                requirements, we're ready to securely login and work with your
                pre-existing departmental dosimetry worksheets.
              </p>
              <p className="text-[#434961] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] -tracking-[0.2px]">
                We aim to provide the highest quality remote dosimetry services to prevent bottlenecks during staff vacancies or unexpected spikes in patient volume.  In some cases, we have filled the gap/need of a 0.6FTE at a significantly lower cost than an actual on-site 0.6FTE.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>

    </section>
  );
}
