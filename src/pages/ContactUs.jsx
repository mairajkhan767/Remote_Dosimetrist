import React from "react";
import GetInTouch from "../components/GetInTouch";
import ReviewSlider from "../components/review-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faClock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden flex justify-center items-center bg-[#003777]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          style={{
            backgroundImage: `url('assets/bg-fourth-section.png')`, // Reuse existing asset
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="z-10 text-center hero-content">
          <h1 className="text-white text-[70px] font-extrabold leading-[1.1] tracking-[-2px]">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="max-w-7xl mx-auto py-20 px-6 z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Area Card */}
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:bg-[#003777] hover:border-transparent transition-colors">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] group-hover:bg-[#cfe6ff] text-4xl mb-2 transition-colors">
                <FontAwesomeIcon icon={faLocationDot} className="text-[#003777] group-hover:text-white" />
              </div>
              <h3 className="text-[#003777] text-[32px] font-extrabold uppercase tracking-wide group-hover:text-white">Area</h3>
              <p className="text-[#434961] text-[18px] font-medium group-hover:text-white">Nationwide</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:bg-[#003777] hover:border-transparent transition-colors">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] group-hover:bg-[#cfe6ff] text-4xl mb-2 transition-colors">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#003777] group-hover:text-white" />
              </div>
              <h3 className="text-[#003777] text-[32px] font-extrabold uppercase tracking-wide group-hover:text-white">Email</h3>
              <a href="mailto:contactus@remotedosimetrist.com" className="text-[#434961] text-[18px] font-medium group-hover:!text-white transition-colors">
                contactus@remotedosimetrist.com
              </a>
            </div>
          </div>

          {/* Hours Card */}
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:bg-[#003777] hover:border-transparent transition-colors">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] group-hover:bg-[#cfe6ff] text-4xl mb-2 transition-colors">
                <FontAwesomeIcon icon={faClock} className="text-[#003777] group-hover:text-white" />
              </div>
              <h3 className="text-[#003777] text-[32px] font-extrabold uppercase tracking-wide group-hover:text-white">Hours</h3>
              <p className="text-[#434961] text-[18px] font-medium group-hover:text-white">Available At All Times</p>
            </div>
          </div>
        </div>
      </div>


      {/* Main Content Split Section */}
      <div className="py-24 max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Content */}
          <div className="flex flex-col gap-8">
            <div className="relative">
              {/* Decorative dots pattern (CSS only) */}
              <div className="absolute -left-10 -top-10 w-24 h-24 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(#00d4bd 2px, transparent 2px)',
                  backgroundSize: '10px 10px'
                }}>
              </div>
              <h2 className="text-[#003777] text-[48px] font-black leading-[1.1] uppercase -tracking-[1px] relative z-10">
                Do You Have Any Additional Questions? If So, Contact Us!
              </h2>
            </div>

            <p className="text-[#434961] text-[18px] leading-[28px]">
              We are so confident that you will appreciate and value our services, that we will create radiation plans for FREE for the first month from the date of the signed contract (maximum 2 plans per week for the first month). In essence, it's a "try before you buy" structure with no strings attached!
            </p>
            <p className="text-[#434961] text-[18px] leading-[28px]">
              We are more than happy to provide you references from other clients so that you may hear their experiences with us and be more at ease with the remote process.
            </p>
            <p className="text-[#434961] text-[18px] leading-[28px]">
              Remote Dosimetrist available to plan for your department whenever you need additional dosimetry resources. First, we execute a typical HIPAA agreement ("business associate agreement"). Then we set up a secure, encrypted, HIPAA-compliant connection to your department's treatment planning system.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[#555] hover:text-[#00d4bd] text-2xl transition"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="text-[#555] hover:text-[#00d4bd] text-2xl transition"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" className="text-[#555] hover:text-[#00d4bd] text-2xl transition"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-[#555] hover:text-[#00d4bd] text-2xl transition"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-[#F9FAFB] p-8 md:p-12 rounded-[20px]">
            <form className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-14 bg-white rounded-lg px-6 text-[#434961] focus:outline-none focus:ring-2 focus:ring-[#00d4bd] shadow-sm placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-14 bg-white rounded-lg px-6 text-[#434961] focus:outline-none focus:ring-2 focus:ring-[#00d4bd] shadow-sm placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full h-14 bg-white rounded-lg px-6 text-[#434961] focus:outline-none focus:ring-2 focus:ring-[#00d4bd] shadow-sm placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full bg-white rounded-lg px-6 py-4 text-[#434961] focus:outline-none focus:ring-2 focus:ring-[#00d4bd] shadow-sm resize-none placeholder-gray-400"
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[#434961] font-semibold">Preferred method of communication</span>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact-method" className="w-5 h-5 text-[#00d4bd] focus:ring-[#00d4bd]" />
                    <span className="text-[#434961]">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact-method" className="w-5 h-5 text-[#00d4bd] focus:ring-[#00d4bd]" />
                    <span className="text-[#434961]">Phone</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end mt-2">
                <button className="px-10 py-4 bg-[#00d4bd] text-white font-bold rounded-lg shadow-md hover:bg-[#00bda8] transition uppercase tracking-wide">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}