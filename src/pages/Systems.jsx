import React from "react";
import GetInTouch from "../components/GetInTouch";
import ReviewSlider from "../components/review-slider";

export default function Systems() {
    return (
        <section>
            {/* Hero Section */}
            <div className="relative w-full h-[50vh] overflow-hidden flex justify-center items-center bg-[#003777]">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                    style={{
                        backgroundImage: `url('assets/bg-fourth-section.png')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>
                <div className="z-10 text-center hero-content">
                    <h1 className="text-white text-[70px] font-extrabold leading-[1.1] tracking-[-2px]">
                        Our Systems
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
                            The Best Systems In The Industry To Help You
                        </h2>
                    </div>
                    <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px] max-w-[800px]">
                        All information is taken from each company's website, and is solely the property of the respective company.
                    </p>
                </div>
            </div>

            {/* MiM Maestro Section */}
            <div className="py-16 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-1">
                        {/* Placeholder or existing image */}
                        <img src="assets/maestro-mim.jpg" alt="MiM Maestro" className="rounded-[32px] w-full object-cover shadow-lg" />
                    </div>
                    <div className="lg:order-2 flex flex-col gap-6">
                        <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">MiM Maestro</h2>
                        <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                            MIM Maestro provides a suite of tools that make adaptive therapy a practical standard of care. From tracking daily delivered dose with ART Assist™ to automatically re-contouring your patient when the physician decides to replan, MIM Maestro will simplify and automate the adaptive process from start to finish.
                        </p>
                        <button className="border-[1px] border-white inline-flex w-[30%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                            Discover More
                            <span className="text-white">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Varian Eclipse Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-2">
                        <img src="assets/medical.jpg" alt="Varian Eclipse" className="rounded-[32px] w-full object-cover shadow-lg" />
                    </div>
                    <div className="lg:order-1 flex flex-col gap-6">
                        <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">Varian Eclipse & Aria</h2>
                        <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                            The rich functionality and efficiency of the Eclipse™ treatment planning system helps simplify modern radiation therapy planning for all standard treatment modalities, including 3D conformal, volumetric modulated arc therapy (VMAT), brachytherapy, electron and proton therapy.
                        </p>
                        <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                            ARIA supports medical and radiation oncology, including proton therapy. Review clinical images, prescriptions, lab results, QA, outcomes, and more. Automate cancer staging based on AJCC guidelines and manage toxicities flexibly.
                        </p>
                        <button className="border-[1px] border-white inline-flex w-[30%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                            Discover More
                            <span className="text-white">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* RayStation Section */}
            <div className="py-16 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-1">
                        <img src="assets/raytherapy.jpg" alt="RayStation" className="rounded-[32px] w-full object-cover shadow-lg" />
                    </div>
                    <div className="lg:order-2 flex flex-col gap-6">
                        <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">RaySearch RayStation</h2>
                        <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                            RayStation® is a flexible, innovative treatment planning system chosen by many of the leading cancer centers worldwide. It combines unique features like unmatched adaptive therapy capabilities, multi-criteria optimization, optimization for HDR brachytherapy and external beam therapy with photons, electrons, protons as well as helium and carbon ions.
                        </p>
                        <button className="border-[1px] border-white inline-flex w-[30%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                            Discover More
                            <span className="text-white">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Philips Pinnacle Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-2">
                        <img src="assets/xRay.jpg" alt="Philips Pinnacle" className="rounded-[32px] w-full object-cover shadow-lg" />
                    </div>
                    <div className="lg:order-1 flex flex-col gap-6">
                        <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">Philips Pinnacle (v16)</h2>
                        <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                            Treatment planning systems (TPS) are a critical component of radiation therapy delivery, primarily to ensure that the tumor site is receiving the maximum therapeutic dose while sparing surrounding tissue and organs as much as possible. As treatment methods continue to evolve and expand, more sophisticated technology is required.
                        </p>
                        <button className="border-[1px] border-white inline-flex w-[30%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                            Discover More
                            <span className="text-white">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Elekta Oncentra Section */}
            <div className="py-16 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-1">
                        <img src="assets/elekta.jpg" alt="Elekta Oncentra" className="rounded-[32px] w-full object-cover shadow-lg" />
                    </div>
                    <div className="lg:order-2 flex flex-col gap-6">
                        <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">Elekta Oncentra Brachytherapy</h2>
                        <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                            In contemporary brachytherapy, the dosimetrist needs to process an increasing amount of information and turn it into effective treatment plans in a limited time. The latest version of Oncentra® Brachy offers a variety of useful tools that facilitate many of the repetitive tasks for you.
                        </p>
                        <button className="border-[1px] border-white inline-flex w-[30%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                            Discover More
                            <span className="text-white">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Elekta Mosaiq Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-2">
                        <img src="assets/Mosaiq.jpg" alt="Elekta Mosaiq" className="rounded-[32px] w-full object-cover shadow-lg" />
                    </div>
                    <div className="lg:order-1 flex flex-col gap-6">
                        <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">Elekta Mosaiq</h2>
                        <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                            MOSAIQ® is a complete patient management information system that centralizes radiation oncology, particle therapy and medical oncology patient data into a single user interface. A global leader in oncology information systems, MOSAIQ provides comprehensive image, data and workflow management.
                        </p>
                        <button className="border-[1px] border-white inline-flex w-[30%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                            Discover More
                            <span className="text-white">→</span>
                        </button>
                    </div>
                </div>
            </div>

            <ReviewSlider />
            <GetInTouch />
        </section>
    );
}
