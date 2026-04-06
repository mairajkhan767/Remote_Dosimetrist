import React, { useEffect, useRef, useState } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReviewSlider from "../components/review-slider";
import GetInTouch from "../components/GetInTouch";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home_New({ alreadyShown }) {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [hoverData, setHoverData] = useState({
    heading: "Head & Neck", // Default heading
    para: "Lorem Ipsum Lorem set dummy buy to lorem" // Default para
  });

  const handleHover = (e) => {
    const { heading, para } = e.target.dataset;
    setHoverData({ heading, para });
  };
  useEffect(() => {
    if (alreadyShown) {
      wrapperRef.current.style.opacity = 1;
      videoRef.current.style.opacity = 1;
    }
  }, [alreadyShown]);

  useGSAP(() => {
    if(screen.width > 1024){
        gsap.set(".s-3-div-1, .s-3-div-3", { width: 620, height: 566 });
        gsap.set('.s-4-bg-image', { scale: 1.05 });
        gsap.set(".s-3-div-2", { width: 620 });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".first-container",
            start: "top+=100 top",
            end: "+=400",
            scrub: 1,
            // markers: true,
            // toggleActions: "play none none reverse"
          },
          // delay: 0,
          onComplete: () => { },
        });
        tl.to(videoRef.current, {
          opacity: 0.5,
          // duration: 1,
          ease: "power4.inOut",
        });
        tl.to(
          ".fCH1",
          {
            y: 200,
            // duration: 2,
            ease: "power1.inOut",
          },
          "<",
        );
        tl.to(
          ".second-c-div",
          {
            y: 0,
            // duration: 2,
            ease: "power4.inOut",
          },
          "<",
        );
        tl.to(
          ".s-3-video",
          {
            y: -200,
            // duration: 2,
            ease: "power1.inOut",
          },
          "<",
        );

        var s_3_div_2_width = '532px',s_3_div_2_height = '532px', s_3_div_width = '393px', s_3_div_height = '394px340px';
        let s_3_divs_padding = [
          {
            left:'278px'
          },
          {
            right:'278px'
          }
        ]

        if(screen.width < 1600){
          s_3_divs_padding.left = '20px';
          s_3_divs_padding.right = '20px';
        }

        // if(screen.width == 1600){
        //   s_3_div_2_width = '657px';
        //   s_3_div_2_height = '340px';
        //   s_3_div_width = '450px'; 
        //   s_3_div_height = '340px';
        // }

        const tls3 = gsap.timeline({
          scrollTrigger: {
            trigger: ".section-3",
            start: "top 70%",
            end: "+=500",
            scrub: 1,
            // markers: true
            // toggleActions: "play none none reverse",
          },
          delay: 0,
          onComplete: () => { },
        });
        tls3.to(".s-3-video", {
          width: "100%",
          left: "0%",
          height: "100%",
          top: "0%",
          y: 0,
          // duration: 1,
          ease: "power4.inOut",
        })
        
        tls3.to(
          ".s-3-video-overlay",
          {
            opacity: 0.8,
          },
          "<",
        );
        tls3.to(
          ".s-3-divs",
          {
            paddingBottom: "66px",
            paddingLeft: s_3_divs_padding.left,
            paddingRight: s_3_divs_padding.right,
          },
          "<",
        );
        tls3.to(
          ".s-3-div-1, .s-3-div-3",
          {
            width: s_3_div_width,
            height: s_3_div_height,
          },
          ">",
        );
        tls3.to(
          ".s-3-content",
          {
            y: 0,
            // duration: 1,
          },
          "<",
        );
        tls3.to(
          ".s-3-div-2",
          {
            y: 0,
            width: s_3_div_2_width,
            height: s_3_div_2_height,
            // duration: 1,
          },
          "<",
        ).to(".s-3-video", {
          y: 0,
        }, ">");

        const tls5 = gsap.timeline({
          scrollTrigger: {
            trigger: ".section-5",
            start: "top 80%",
            end: "+=500",
            scrub: 1,
            // toggleActions: "play none none reverse",
            // scrub: true,
            // markers: true
          },
          delay: 0,
          onComplete: () => { },
        });
        tls5.to(".s-5-c-1", {
          y: 0,
          opacity: 1,
          duration: 1,
        });
        tls5.to(
          ".s-5-h2, .s-5-p, .s-5-button",
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          "<",
        );

        const tls4 = gsap.timeline({
          scrollTrigger: {
            trigger: ".section-4",
            start: "top top",
            end: "+=500",
            scrub: 1,
            // pin: '.s-4-bg-image-c'
            // toggleActions: "play none none reverse",
            // scrub: true,
            // markers: true
          },
          delay: 0,
          onComplete: () => { },
        });
        tls4.to(".area-main", {
          scale: 1.8,
          rotate: 180,
          duration: 1
        })
          .to(".s-4-heading-2", {
            opacity: 0,
            duration: 2
          }, "<")
          .to(".s-4-heading-1", {
            opacity: 1,
            duration: 2
          }, "<")
          .to(".area-main", {
            y: 300,
            duration: 2
          }, "<")
          .to(".s-4-bg-color", {
            height: "20%",
            duration: 2
          }, "<")
          .to(".s-4-bg-image", {
            scale: 1.8,
            rotate: -180,
            duration: 2
          }, "<")
          .to(".content-main", {
            scale: 1,
            rotate: 180,
            duration: 2
          }, "<")
          .to(".content-main", {
            opacity: 1,
            duration: 2
          }, ">")
          ;
    }
    
  });
  return (
    <section
      ref={wrapperRef}
      style={{
        opacity: 0,
        transition: "opacity 1s ease-in",
      }}
    >
      <div className="first-container bg-main-video relative">
        <div className="w-full h-full flex justify-center items-end pb-10 xl:pb-[179px]">
          <video
            className="object-cover absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            ref={videoRef}
            style={{
              opacity: 0,
              transition: "opacity 1s ease-in",
            }}
            autoPlay
            muted
            loop
            playsInline
            src="assets/bg-video-2.mp4"
          ></video>
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{
              // background: `radial-gradient(rgba(255, 255, 255, 0) 25%, rgb(255, 255, 255) 67%)`,
              backgroundImage: `url('assets/fade-overlay.png')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="hidden absolute xl:top-[258px] xxxl:top-[450px] xl:left-[10px] 4xl:top-[380px] 4xl:left-[210px] 2xl:left-[120px] 2xl:top-[250px] xl:flex xl:flex-row-reverse xl:gap-[38px]">
            <img src="assets/line-banner-2.png" alt="" />
            <p className="text-[16px] xl:text-[20px] text-[#434961] leading-[24px] w-[280px] content-end text-end mb-[-37px]">
              Advanced Radiotherapy Treatment Process
            </p>
          </div>
          <div className="hidden absolute 4xl:top-[150px] 4xl:right-[16.3%] xl:top-[210px] xl:right-[10.3%] xl:flex xl:gap-[9px]">
            <img src="assets/line-banner-1.png" alt="" />
            <p className="text-[20px] text-[#434961] leading-[24px] w-[200px] content-end mb-[-25px]">
              Remote-Only Dosimetry Company
            </p>
          </div>
          <div className="p-0 z-10 relative">
            <h1 className="fCH1 text-[28px] lg:text-[40px] lg:leading-12 text-center leading-8 xl:text-3xl xl:leading-10 xl:text-[100px] text-[#003777] xl:leading-24 -tracking-[2.5px] font-extrabold">
              Dosimetry Made Simple
            </h1>
            <div className="second-c-div flex lg:px-10 xl:px-10 xl:hidden justify-center flex-col items-center gap-[10px] pt-[20px]">
              <p className="w-full px-5 text-center text-[16px] lg:text-[22px] lg:leading-8 leading-5  tracking-[-0.65px]">
                A group of certified medical dosimetrists that truly care. We always
                have the patient's best needs at heart on any treatment plan that we
                create for you, the client.
              </p>
              <button className="ip-btn ip-btn-primary w-fit mt-3">
                Discover More <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex w-full justify-center items-center">
        <div className="second-c-div flex justify-center flex-col items-center gap-[36px] py-[36px] top-25">
          <p className="w-full px-2 xl:px-0 text-[16px] leading-5 xl:w-[695px] text-center xl:text-[26px] xl:leading-9.25 tracking-[-0.65px]">
            A group of certified medical dosimetrists that truly care. We always
            have the patient's best needs at heart on any treatment plan that we
            create for you, the client.
          </p>
          <button className="ip-btn ip-btn-primary w-fit mt-3">
            Discover More <span>→</span>
          </button>
        </div>
      </div>
      <div className="min-h-[150dvh] hidden xl:block relative">
        <div className="section-3 w-full min-h-dvh overflow-hidden sticky top-0">
          <video
            className="s-3-video absolute inset-0 h-full w-full object-cover origin-center"
            src="assets/3rd-sec-video.mp4"
            poster="assets/3rd-sec-video-poster.png"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "35%",
              left: "32.5%",
              height: "65%",
              top: "37%",
              duration: 0.5,
            }}
          />
          <div className="s-3-video-overlay absolute inset-0 h-full w-full object-cover bg-[#0A388D] opacity-0 z-2 mix-blend-screen"></div>
          <div className="pt-[93px] z-5 relative">
            <div className="s-3-content flex justify-center flex-col items-center relative z-10 gap-[38px] translate-y-[400px]">
              <h2 className="text-[70px] font-extrabold text-white">
                Plans That Help
              </h2>
              <p className="w-[532px] text-[26px] text-center text-white">
                The Remote Dosimetrist staff can offer the right solution for
                your cancer center radiation oncology department's needs.
              </p>
            </div>
            <div className="pt-[61px] flex flex-row items-center 2xl:justify-center gap-[23px] items-center s-3-divs">
              <div className="s-3-div-1 relative group overflow-hidden w-[620px] h-[566px]">
                <img
                  src="assets/3D Planning.png"
                  alt="3D Planning"
                  className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">3D Planning</h3>
                </div>
              </div>
              <div className="s-3-div-2 relative group overflow-hidden translate-y-[800px] w-[620px]">
                <img
                  src="assets/VMRL.png"
                  alt="VMAT"
                  className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/75 flex flex-col items-center justify-center px-6 text-center gap-[36px]">
                  <h3 className="text-4xl font-extrabold text-white">VMAT</h3>
                  <p className="text-blue-100 text-[22px] w-[432px] 2xl:w-[350px]">
                    Volumetric modulated arc therapy (VMAT) has rapidly become
                    the standard of care in the radiation oncology...
                  </p>
                  <button className="ip-btn ip-btn-primary w-fit mt-3">
                    Discover More <span>→</span>
                  </button>
                </div>
              </div>
              <div className="s-3-div-3 relative group overflow-hidden  w-[620px] h-[566px]">
                <img
                  src="assets/IMRT.png"
                  alt="IMRT"
                  className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">IMRT</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center xl:hidden gap-10 py-10">
        <div className="w-full flex flex-col justify-center items-center lg:px-30 gap-5">
          <h2 className="text-[28px] lg:text-[40px] font-extrabold text-center text-[#003777]">
            Plans That Help
          </h2>
          <p className="w-full text-[16px] lg:text-[22px] px-8 text-center text-black">
            The Remote Dosimetrist staff can offer the right solution for your
            cancer center radiation oncology department's needs.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:gap-2 justify-center items-center px-5 gap-10">
          <div className="w-full relative group overflow-hidden rounded-2xl lg:p-2">
            <img
              src="assets/3D Planning.png"
              alt="3D Planning"
              className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">3D Planning</h3>
            </div>
          </div>
          <div className="w-full relative group overflow-hidden rounded-2xl lg:p-2">
            <img
              src="assets/VMRL.png"
              alt="VMAT"
              className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-blue-900/75 flex flex-col items-center justify-center px-6 text-center gap-[36px]">
              <h3 className="text-4xl font-extrabold text-white">VMAT</h3>
              <p className="text-blue-100 text-[16px] w-10/12 text-center">
                Volumetric modulated arc therapy (VMAT) has rapidly become
                the standard of care in the radiation oncology...
              </p>
              <button className="ip-btn ip-btn-primary w-fit mt-3">
                Discover More <span>→</span>
              </button>
            </div>
          </div>
          <div className="w-full relative group overflow-hidden rounded-2xl lg:p-2">
            <img
              src="assets/IMRT.png"
              alt="IMRT"
              className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">IMRT</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[200dvh] hidden xl:block">
        <div className="section-4 w-full min-h-dvh flex justify-center items-center sticky top-0">
          <div className="w-full h-full">

            <div className="s-4-bg-color w-full h-full flex justify-center absolute left-0 top-0 items-center"
              style={{
                backgroundColor: "#003777",
              }}
            >
              <h2 className="s-4-heading-1 text-[38px] w-[500px] top-[44%] left-[45.3%] text-white font-extrabold text-center -tracking-[0.95px] opacity-0">
                Areas of Focus
              </h2>
            </div>
            <div className="s-4-bg-image-c w-full h-full flex justify-center absolute left-0 top-0">
              <img src="assets/bg-fourth-section.png" alt="" className="s-4-bg-image  scale-105" />
            </div>
            <div className="flex flex-row justify-center">
              <h2 className="s-4-heading-2 text-[38px] w-[180px] absolute top-[44%] left-[45.3%] text-white font-extrabold text-center -tracking-[0.95px]">
                Areas of Focus
              </h2>
              <div className="area-main">
                <div className="content-main z-5 opacity-0">
                  <div className="innter-content">
                    <h2 className="text-[#003777] s-4-heading-change text-[24px] text-center font-extrabold">
                      {hoverData.heading}
                    </h2>
                    <p className="text-[#003777] s-4-para-change text-center !text-[18px]">
                      {hoverData.para}
                    </p>
                    <div className="m-auto flex justify-center">
                      <button className="w-[223px] h-[54px] rounded-full bg-[#003777]! text-white! hover:bg-white! hover:text-[#003777]! border border-[#003777] transition-all! duration-500!">
                        Discover More
                      </button>
                    </div>
                  </div>
                </div>
                <div className="image-02">
                  <img src="assets/focus-images/Pelvis.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Pelvis" data-para="Focusing on larger and more irregularly shaped pelvic target volumes" />
                </div>
                <div className="image-01">
                  <img src="assets/focus-images/Head-Neck.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Head & Neck" data-para="Head and neck cancers have often been associated with very difficult and time-consuming radiation" />
                </div>
                <div className="image-03">
                  <img src="assets/focus-images/Pediatrics.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Pediatrics" data-para="Radiation has always been a cancer treatment that has been attempted to be reduced and/or avoided" />
                </div>
                <div className="image-04">
                  <img src="assets/focus-images/Breast.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Breast" data-para="One of the few radiation dosimetry techniques that has not thoroughly changed over time" />
                </div>
                <div className="image-05">
                  <img src="assets/focus-images/Chest.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Chest" data-para="Lung irradiation has always presented a dosimetry problem with doses above 20Gy to the nearby healthy lung" />
                </div>
                <div className="image-06">
                  <img src="assets/focus-images/CNS.png" alt="Area 01" onMouseEnter={handleHover} data-heading="CNS" data-para="Standard of care for primary brain tumors is VMAT" />
                </div>
                <div className="image-07">
                  <img src="assets/focus-images/abdomen.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Abdomen" data-para="Focusing on larger and more irregularly shaped abdominal target volumes" 
                  style={{
                    width: "150px",
                    height: "150px"
                  }}
                  />
                </div>
                <div className="image-08">
                  <img src="assets/focus-images/uterus.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Uterus" data-para="Uterine cancers have often been associated with very difficult and time-consuming radiation" 
                  style={{
                    width: "150px",
                    height: "150px"
                  }}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-5 w-full xl:min-h-dvh xl:mt-[500px] xxxl:mt-[400px] relative flex flex-col xl:flex-row justify-start items-center xl:justify-between xl:items-stretch gap-[38px] px-5 4xl:px-[140px]">
        <div className="flex flex-col justify-center lg:gap-[38px] gap-[55px] w-full xl:w-1/2">
          <div
            className="s-5-c-1 flex flex-col justify-between gap-[32px] p-10 xl:stay-col xl:opacity-0 xl:translate-y-[500px]"
            style={{
              background: `linear-gradient(45deg, #003777, #0E3CF6)`,
              borderRadius: "32px",
            }}
          >
            <h2 className=" text-[20px] lg:text-[40px] xl:text-[48px] text-white -tracking-[1.2px] xl:leading-[52px] font-bold xl:w-[500px]">
              Remote Dosimetry Is Here To Stay
            </h2>
            <p className="text-[16px] lg:text-[22px] xl:text-[26px] text-white -tracking-[0.65px] xl:leading-[37px] 4xl:w-[694px]">
              Remote Dosimetrist has shown to be more efficient than on-site
              dosimetry. It is structured to help our clients effectively and
              safely handle the treatment of their cancer patients especially
              during these critical and challenging times of mandated or
              self-quarantine.
            </p>
            <a href="/about" className="ip-btn ip-btn-outline w-fit">
              Discover More <span>→</span>
            </a>
          </div>
          <div>
            <img src="assets/5th-sec-img-1.png" className="w-full" alt="" />
          </div>
        </div>
        <div
          className="flex flex-col justify-center xl:justify-start p-10 gap-[32px] rounded-[32px] bg-no-repeat bg-cover bg-bottom w-full xl:w-1/2"
          style={{ backgroundImage: "url(assets/5th-sec-img-2.png)" }}
        >
          {/* <img src="assets/5th-sec-img-2.png" alt="" /> */}
          <h2 className="s-5-h2 text-[28px] lg:text-[40px] xl:text-[48px] text-white -tracking-[1.2px] xl:leading-[52px] font-bold  xl:w-[500px] xl:opacity-0 xl:translate-y-[500px]">
            Why Hire A Remote Dosimetrist?
          </h2>
          <p className="s-5-p text-[16px] lg:text-[22px] xl:text-[26px] text-white -tracking-[0.65px] xl:leading-[37px] 4xl:w-[694px] xl:opacity-0  xl:translate-y-[500px]">
            While the number of cancer patients increases and the demand for
            professional dosimetrists remains high, it’s not always feasible for
            smaller, rural centers to have full-time dosimetrists on the staff.
            If the patient demand isn’t enough for a small town, hiring a remote
            worker makes more sense.
          </p>
          <a href="/about" className="ip-btn ip-btn-outline w-fit">
            Discover More <span>→</span>
          </a>
        </div>
      </div>
      <div
        className="review-section w-full"
        style={{
          backgroundImage: `url("assets/18773521_6022556_Artboard 1.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <ReviewSlider />
        <GetInTouch />
      </div>
    </section>
  );
}
