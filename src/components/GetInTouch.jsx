export default function GetInTouch() {
  return (
    <div className="bg-[#003777]/9 px-6 md:px-16 lg:px-28 py-12 md:py-20 w-full home-form">
      <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-16">
        <div className="w-full flex flex-col lg:gap-4 gap-10 items-start">
          <div className="flex flex-col lg:gap-2 gap-6">
            <p className="text-[18px] md:text-[22px] text-white px-5 py-1 bg-[#003777] w-fit">Get in Touch!</p>
            <div>
              <h2 className="text-[32px] md:text-[48px] text-black font-medium leading-tight tracking-0">Get Started, No Waiting</h2>
              <h2 className="text-[38px] md:text-[58px] text-black font-medium leading-tight tracking-0">JUST RESULTS</h2>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <input type="text" name="name" id="name" placeholder="Name" autoComplete="off" className="bg-transparent border-[#8EA7C4] px-6 py-5 text-[16px] text-[#5C296C] font-semibold border border-solid" />
            <input type="text" name="phone" id="phone" placeholder="Phone" autoComplete="off" className="bg-transparent border-[#8EA7C4] px-6 py-5 text-[16px] text-[#5C296C] font-semibold border border-solid" />
            <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" className="bg-transparent border-[#8EA7C4] px-6 py-5 text-[16px] text-[#5C296C] font-semibold border border-solid" />
            <textarea name="message" id="message" cols="1" rows="1" placeholder="Message" autoComplete="off" className="bg-transparent min-h-[100px] xl:min-h-[188px] border-[#8EA7C4] text-[#5C296C] px-6 py-5 text-[16px] font-semibold border border-solid"></textarea>
          </div>
          <div>
            <button className="ip-btn ip-btn-primary w-fit mt-3">
              Book Now
              <span>→</span>
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8">
          <div>
            <img src="/assets/CAR-dosometrist-.png" alt="" className="w-full" />
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div className="border border-gray-500 px-6 md:px-14 py-2 xl:py-4 flex flex-col">
                <button onClick={() => toggleAccordion(1)} className="w-full flex justify-between items-center bg-transparent! text-left">
                  <span className="text-[#003777]">What is Material Tailwind?</span>
                  <span id="icon-1" className="text-slate-800 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <div id="content-1" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="text-sm text-black">
                    Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
                  </div>
                </div>
              </div>

              <div className="border border-gray-500 px-6 md:px-14 py-2 xl:py-4 flex flex-col">
                <button onClick={() => toggleAccordion(2)} className="w-full flex justify-between items-center bg-transparent! text-left">
                  <span className="text-[#003777]">How to use Material Tailwind?</span>
                  <span id="icon-2" className="text-slate-800 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <div id="content-2" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="text-sm text-black">
                    You can use Material Tailwind by importing its components into your Tailwind CSS project.
                  </div>
                </div>
              </div>

              <div className="border border-gray-500 px-6 md:px-14 py-2 xl:py-4 flex flex-col">
                <button onClick={() => toggleAccordion(3)} className="w-full flex justify-between items-center bg-transparent! text-left">
                  <span className="text-[#003777]">What can I do with Material Tailwind?</span>
                  <span id="icon-3" className="text-slate-800 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <div id="content-3" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="text-sm text-black">
                    Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
