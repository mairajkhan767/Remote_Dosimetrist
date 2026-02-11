import React, { useEffect, useRef } from "react";
import GetInTouch from "../components/GetInTouch";
import ReviewSlider from "../components/review-slider";

export default function Plans() {
  const wrapperRef = useRef(null);


  return (
    <section ref={wrapperRef} className="">
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
            Our Plans
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto text-center px-6 gap-8 flex flex-col items-center">
          <div className="relative">
            <div className="absolute -left-10 -top-10 w-24 h-24 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(#00d4bd 2px, transparent 2px)',
                backgroundSize: '10px 10px'
              }}>
            </div>
            <h2 className="text-[#003777] text-[48px] font-bold leading-[52px] -tracking-[1.2px] relative z-10">
              How We Help You On Your Journey
            </h2>
          </div>
          <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px] max-w-[800px]">
            Our skillset includes all types of 3D plans, IMRT plans, VMAT plans, and brachytherapy plans.  We pride ourselves in high quality work with incredibly rapid turnaround.  We nearly always have the plan complete and ready for your oncologist's review in less than 24 hours.   We aim to not only meet your needs, but to exceed them in regards to what a dependable medical dosimetrist can be and do for your radiation oncology department.
          </p>
        </div>
      </div>

      {/* 3D Plans Section */}
      <div className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-1">
            <img src="assets/3dplans.png" alt="3D Plans" className="rounded-[32px] w-full object-cover shadow-lg" />
          </div>
          <div className="lg:order-2 flex flex-col gap-6">
            <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">3D Plans</h2>
            <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
              Whether your 3D plan consists of a simple palliative spine mets plan to a complex four field breast 3D plan, the price is dependent on the level of complexity.  Other remote dosimetry companies charge a flat fee by the plan.  We are sensitive to the level of complexity and cost, and accordingly, to the amount of time it would take our dosimetrists to complete the plan for you.
            </p>
          </div>
        </div>
      </div>

      {/* IMRT Plans Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <img src="assets/IMRTPLANS.png" alt="IMRT Plans" className="rounded-[32px] w-full object-cover shadow-lg" />
          </div>
          <div className="lg:order-1 flex flex-col gap-6">
            <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">IMRT Plans</h2>
            <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
              Our Intensity-Modulated Radiation Therapy (IMRT) plans are designed to deliver precise radiation doses to the tumor while minimizing dose to surrounding normal tissues. We utilize advanced optimization algorithms to create highly conformal dose distributions, ensuring optimal target coverage and organ sparing.
            </p>
          </div>
        </div>
      </div>

      {/* VMAT Plans Section */}
      <div className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-1">
            <img src="assets/VMAT-remote.png" alt="VMAT Plans" className="rounded-[32px] w-full object-cover shadow-lg" />
          </div>
          <div className="lg:order-2 flex flex-col gap-6">
            <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">VMAT Plans</h2>
            <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
              Volumetric Modulated Arc Therapy (VMAT) offers faster delivery times and superior dose conformity. Our team is expert in VMAT planning, balancing modulation and delivery efficiency to provide the best possible treatment for your patients.
            </p>
          </div>
        </div>
      </div>

      {/* SBRT/SABR Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            {/* Reuse an image or placeholder if specific one not found, using generic for now */}
            <img src="assets/Spine-SBRT.jpg" alt="SBRT/SABR" className="rounded-[32px] w-full object-cover shadow-lg" />
          </div>
          <div className="lg:order-1 flex flex-col gap-6">
            <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">SBRT/SABR</h2>
            <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
              Stereotactic Body Radiation Therapy (SBRT) and Stereotactic Ablative Radiotherapy (SABR) require extreme precision. We provide meticulous planning for these high-dose-per-fraction treatments, ensuring steep dose gradients and maximal organ protection.
            </p>
          </div>
        </div>
      </div>

      {/* Brachytherapy Section */}
      <div className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-1">
            <img src="assets/Brachytherapy.png" alt="Brachytherapy" className="rounded-[32px] w-full object-cover shadow-lg" />
          </div>
          <div className="lg:order-2 flex flex-col gap-6">
            <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">Brachytherapy Plans</h2>
            <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
              We offer comprehensive brachytherapy planning services, including HDR and LDR planning. Our expertise ensures accurate dose distribution for optimal therapeutic outcomes.
            </p>
          </div>
        </div>
      </div>

      <ReviewSlider />
      <GetInTouch />
    </section>
  );
}