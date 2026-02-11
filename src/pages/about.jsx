import React, { useEffect, useRef, useState } from "react";

export default function about() {

    return (
        <>
            <section>
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
                            About Dosimetrist
                        </h1>
                    </div>
                </div>
            </section>
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

                        {/* <!-- Vision --> */}
                        <div class="group p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:bg-[#003777] hover:border-transparent transition-colors">
                            <div class="flex justify-center mb-6">
                                <div class="w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] group-hover:bg-[#cfe6ff] transition-colors">
                                    {/* <!-- Icon --> */}
                                    <svg class="w-10 h-10 text-[#003777] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2a9 9 0 100 18 9 9 0 000-18zm1 13h-2v-2h2v2zm0-4h-2V7h2v4z" />
                                    </svg>
                                </div>
                            </div>

                            <h3 class="text-xl font-semibold text-gray-900 group-hover:text-white mb-4">
                                Our Vision
                            </h3>

                            <p class="text-gray-600 group-hover:text-white leading-relaxed">
                                Our vision is to create long and lasting partnerships with our clients
                                and to share information within our network that improves workflow in
                                every department.
                            </p>
                        </div>

                        {/* <!-- Mission --> */}
                        <div class="group p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:bg-[#003777] hover:border-transparent transition-colors">
                            <div class="flex justify-center mb-6">
                                <div class="w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] group-hover:bg-[#cfe6ff] transition-colors">
                                    {/* <!-- Icon --> */}
                                    <svg class="w-10 h-10 text-[#003777] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l4 8h-8l4-8zm0 9a7 7 0 100 14 7 7 0 000-14z" />
                                    </svg>
                                </div>
                            </div>

                            <h3 class="text-xl font-semibold text-gray-900 group-hover:text-white mb-4">
                                Our Mission
                            </h3>

                            <p class="text-gray-600 group-hover:text-white leading-relaxed">
                                Our mission is to gain our clients’ trust and appreciation by providing
                                the highest quality plans in the most efficient manner possible.
                            </p>
                        </div>

                        {/* <!-- Values --> */}
                        <div class="group p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:bg-[#003777] hover:border-transparent transition-colors">
                            <div class="flex justify-center mb-6">
                                <div class="w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] group-hover:bg-[#cfe6ff] transition-colors">
                                    {/* <!-- Icon --> */}
                                    <svg class="w-10 h-10 text-[#003777] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l9 4.5-9 4.5-9-4.5L12 2zm0 9l9 4.5-9 4.5-9-4.5L12 11z" />
                                    </svg>
                                </div>
                            </div>

                            <h3 class="text-xl font-semibold text-gray-900 group-hover:text-white mb-4">
                                Our Values
                            </h3>

                            <p class="text-gray-600 group-hover:text-white leading-relaxed">
                                We value honesty, communication, fairness, consistency, and efficiency.
                                All of our clients and their patients are treated with utmost care.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            <section className="relative py-24 bg-gray-50 bg-cover bg-center">
                {/* subtle background accent */}

                <div className="w-full min-h-dvh relative flex flex-row justify-between items-stretch gap-[38px] px-[140px]">
                    <div className="flex flex-col justify-center gap-[55px]">
                        <div className="flex flex-col justify-between p-10 stay-col"
                            style={{
                                background: `linear-gradient(45deg, #003777, #0E3CF6)`,
                                borderRadius: '32px'
                            }}>
                            <div className="relative">
                                <div className="absolute -left-10 -top-10 w-24 h-24 opacity-20"
                                    style={{
                                        backgroundImage: 'radial-gradient(#00d4bd 2px, transparent 2px)',
                                        backgroundSize: '10px 10px'
                                    }}>
                                </div>
                                <h2 className="text-[#003777] text-[48px] text-white -tracking-[1.2px] leading-[52px] font-bold  w-[500px] pb-4 relative z-10">Get To Know Us</h2>
                            </div>
                            <p className="text-[#003777] text-[26px] text-white -tracking-[0.65px] leading-[37px] w-[694px]">We are a remote-only dosimetry company and more specifically, a group of certified medical dosimetrists that truly care.  We always have the patient's best needs at heart on any treatment plan that we create for you, the client.</p>
                            <p className="text-[#003777] text-[26px] text-white -tracking-[0.65px] leading-[37px] w-[694px] pb-4">We'd like to think of ourselves as an a-la-carte type business.  You may call upon our services when you truly need some dosimetry work.  We strive to fill a niche of providing dosimetry coverage from filling a void of personal time off (PTO), work overflow, sick time, to filling the workload of a full-time employee, and anything in between.  If you are just starting a center and you can't support a full time dosimetrist, then consider us to fill the gap.</p>
                            <button className="border-[1px] border-white inline-flex w-[30%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                            Discover More
                            <span className="text-white">→</span>
                        </button>
                        </div>
                        <div>
                            <img src="assets/5th-sec-img-1.png" alt="" />
                        </div>
                    </div>
                    <div className="relative isolate inset-0 flex flex-col justify-start p-10 gap-[32px] rounded-[32px] bg-no-repeat bg-cover bg-bottom" style={{
                        backgroundImage: 'url(assets/about-bg.jpg)',
                        backgroundPosition: "left",
                        backgroundSize: "cover",
                    }}>
                        <div class="absolute inset-0 bg-[#003777]/50 rounded-[32px]"></div>
                        <div className="z-10">
                            {/* <img src="assets/5th-sec-img-2.png" alt="" /> */}
                            <div className="relative">
                                <div className="absolute -left-10 -top-10 w-24 h-24 opacity-20"
                                    style={{
                                        backgroundImage: 'radial-gradient(#00d4bd 2px, transparent 2px)',
                                        backgroundSize: '10px 10px'
                                    }}>
                                </div>
                                <h2 className="text-[#003777] text-[48px] text-white -tracking-[1.2px] leading-[52px] font-bold w-[500px] pb-4 relative z-10">Delivering Quality Care</h2>
                            </div>
                            <p className="text-[#003777] text-[26px] text-white -tracking-[0.65px] leading-[37px] w-[694px] pb-4">We provide high quality plans to you at a fraction of the cost of the competitors.  We have very little overhead costs and we are sure to pass those savings on to you, to keep your costs to a minimum.  Partnering with Remote Dosimetrist will ensure savings for your department; from not paying any benefits, to not paying in times where your patient load temporarily declines to less than normal patient numbers.</p>
                            <p className="text-[#003777] text-[26px] text-white -tracking-[0.65px] leading-[37px] w-[694px] pb-4">
                                Priding ourselves on fast turnarounds, more often than not overnight, by our experienced staff is one of our highest priorities. Each of our certified medical dosimetrists have a minimum of 15 years of dedicated dosimetry experience, ensuring that we have the knowledge and experience to tackle any complex treatment plan that you may have in your department.
                            </p>
                            <button className="border-[1px] border-white inline-flex w-[30%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                            Discover More
                            <span className="text-white">→</span>
                        </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column */}
                    <div className="flex flex-col justify-center">
                        <span className="inline-block mb-4 text-sm font-semibold uppercase">
                            Why Hire a Remote Dosimetrist?
                        </span>

                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                            Flexible staffing for growing cancer centers
                        </h2>

                        <div className="space-y-5 text-gray-600 leading-relaxed">
                            <p>
                                While the number of cancer patients increases and the demand for professional dosimetrists remains high, it’s not always feasible for smaller, rural centers to have full-time dosimetrists on the staff. If the patient demand isn’t enough for a small town, hiring a remote worker makes more sense.
                            </p>

                            <p>
                                Using remote treatment planning can be cost-effective for many organizations while allowing for steady patient growth. Even if your caseloads increase, you can avoid adding full-time employees, without affecting your bottom line. Plus, limiting the number of people that a cancer patient, with their immunocompromised system, encounters is safer for that individual.
                            </p>

                        </div>
                    </div>

                    {/* Right Column */}
                                        <div className="relative img-div">
                                            <img src="assets/information.jpg" alt="Professional workspace showing remote dosimetry work setup with medical planning materials and computer screens in a modern office environment" className="rounded-[32px] w-full object-cover shadow-lg h-[700px]" />
                                        </div>

                                    </div>
                                </section>
                                <section className="py-24 bg-white">
                                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                                        {/* Left Column */}
                    <div className="relative img-div">
                        <img src="assets/img-4.png" alt="About visual" className="rounded-[32px] w-full object-cover shadow-lg h-[700px]" />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-center">
                        {/* subtle decorative accent */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

                        <span className="inline-block mb-4 text-sm font-semibold uppercase">
                            The Future of Care
                        </span>

                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                            Remote dosimetry is here to stay
                        </h2>

                        <div className="space-y-5 text-gray-600 leading-relaxed">
                            <p>
                                Remote Dosimetrist has shown to be more efficient than on-site dosimetry. It is structured to help our clients effectively and safely handle the treatment of their cancer patients especially during these critical and challenging times of mandated or self-quarantine.
                            </p>

                            <p>
                                Using our services allows you to maintain high-quality treatment for your patients safely and be prepared for unexpected employee absences or other situations.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}