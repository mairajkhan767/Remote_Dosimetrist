import GetInTouch from "../components/GetInTouch";
import ReviewSlider from "../components/review-slider";


export default function AreasofFocus() {

  return (
    <>
      <section>
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
              Areas of Focus
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
                Helping Make Your Life Easier
              </h2>
            </div>
            <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px] max-w-[800px]">
              Helping make your life easier with high quality dosimetry planning and quick turnaround times.
            </p>
          </div>
        </div>

        {/* Pelvis Section */}
        <div className="py-16 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1">
              <img src="assets/pelvis.jpg" alt="Pelvis" className="rounded-[32px] w-full object-cover shadow-lg" />
            </div>
            <div className="lg:order-2 flex flex-col gap-6">
              <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">Pelvis</h2>
              <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                Focusing on larger and more irregularly shaped pelvic target volumes, VMAT provides substantial dose conformity over previously standard three-dimensional radiation treatment planning.  This has allowed for radiation dose escalation due to often studied reduced side effects with VMAT technique.  Significant dose reduction to small bowel and other sensitive gastrointestinal organs has made VMAT a standard technique when treating the pelvis.
              </p>
            </div>
          </div>
        </div>

        {/* Head & Neck Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <img src="assets/headneck.jpg" alt="Head & Neck" className="rounded-[32px] w-full object-cover shadow-lg" />
            </div>
            <div className="lg:order-1 flex flex-col gap-6">
              <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">Head & Neck</h2>
              <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                Head and neck cancers have often been associated with very difficult and time-consuming radiation treatment planning.  When IMRT was introduced, the difficult issue of treating the posterior neck lymph nodes was finally solved.  This also led to significant organ at risk radiation dose reduction as well.  VMAT offered the additional solution of time, reduction in monitor units, and even improved dose reduction of organs at risk than IMRT.  Often, two arc plans provide similar conformity and better homogeneity than IMRT radiation plans.
              </p>
            </div>
          </div>
        </div>

        {/* Chest Section */}
        <div className="py-16 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1">
              <img src="assets/chest.jpg" alt="Chest" className="rounded-[32px] w-full object-cover shadow-lg" />
            </div>
            <div className="lg:order-2 flex flex-col gap-6">
              <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">Chest</h2>
              <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                Lung irradiation has always presented a dosimetry problem with doses above 20Gy to the nearby healthy lung.  VMAT has allowed higher doses to be delivered than previous generations of radiation dosimetry planning as well.  The tradeoff is that VMAT does, in fact, deliver a greater low dose radiation wash than previous generations as well.  Due to this, previous lung DVH parameters of v5Gy and v10Gy, are now closely monitored.  Stereotactic body radiation therapy (SBRT) delivers high levels of radiation to the tumor.  This is done instead of surgery (eliminating major surgeries) and the results have been compared extensively.  Breathing motion issues have been addressed with deep inspiration breath hold, 4DCT, and gated treatments as well.
              </p>
            </div>
          </div>
        </div>

        {/* Pediatrics Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <img src="assets/Pediatric.jpg" alt="Pediatrics" className="rounded-[32px] w-full object-cover shadow-lg" />
            </div>
            <div className="lg:order-1 flex flex-col gap-6">
              <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">Pediatrics</h2>
              <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                Radiation has always been a cancer treatment that has been attempted to be reduced and/or avoided due to the long-term side effects that it can have on growth and cognitive function development.  When radiation has decided to be given, dosimetry must be handled with extreme care.  VMAT has allowed a reduction in monitor units and time for children.  Often, they are anesthetized and that presents it's own set of challenges. There have been extensive advances in full craniospinal radiation dosimetry planning in recent years as well.  Craniospinal VMAT is becoming more popular and more accepted in the radiotherapy community.
              </p>
            </div>
          </div>
        </div>

        {/* Breast Section */}
        <div className="py-16 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1">
              <img src="assets/RtBreast.jpg" alt="Breast" className="rounded-[32px] w-full object-cover shadow-lg" />
            </div>
            <div className="lg:order-2 flex flex-col gap-6">
              <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">Breast</h2>
              <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                One of the few radiation dosimetry techniques that has not thoroughly changed over time.  For the most part, whole breast radiation has been considered the standard of care using three-dimensional radiation planning techniques.  There have been more recent efforts for partial breast treatment, brachytherapy and/or VMAT/IMRT techniques.  The issues remain of minimizing radiation dose to the heart and to the ipsilateral lung.  Using VMAT/IMRT has the consequence of low dose radiation to the contralateral breast and lungs.  Much effort has been made to increase the homogeneity of dose delivered within the breast via field in field or electronic compensation methods.  Novel approaches with deep inspiration breath hold with gating have been utilized to reduce radiation to healthy lung and heart.
              </p>
            </div>
          </div>
        </div>

        {/* CNS Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <img src="assets/brain.jpg" alt="CNS" className="rounded-[32px] w-full object-cover shadow-lg" />
            </div>
            <div className="lg:order-1 flex flex-col gap-6">
              <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">CNS</h2>
              <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                Standard of care for primary brain tumors is VMAT.   In recent years, VMAT has been used for palliative radiation dosimetry as well.  While delivering standard dose to the whole brain, it allows a higher dose to be delivered to the brain metastases simultaneously.  Alternatively, stereotactic radiosurgery can deliver extremely high doses to individual brain mets with as little as only one isocenter. This reduces the amount of brain surgeries required and, therefore, offers patients a higher quality of life.
              </p>
            </div>
          </div>
        </div>


        {/* Additional Info Section */}
        <div className="py-20 bg-[#003777] text-white">
          <div className="max-w-[900px] mx-auto text-center px-6 flex flex-col items-center gap-8">
            <h2 className="text-[38px] font-extrabold -tracking-[0.95px]">Additional Information</h2>
            <p className="text-[20px] leading-[32px] font-light">
              It's to be noted that the regions listed above are not our only target areas. We provide remote dosimetry services for every aspect of the body, which includes the areas listed above.
              <br /><br />
              If you have any additional questions, or concerns, don't hesitate to contact us, as we are available to answer your inquiries.
            </p>
            <button className="border-[1px] border-white inline-flex w-[20%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                            Contact Us
                            <span className="text-white">→</span>
                        </button>
          </div>
        </div>


        <ReviewSlider />
        <GetInTouch />
      </section>
    </>
  );
}