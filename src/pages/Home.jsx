import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const wrapperRef = useRef(null);
    const alreadyShown = sessionStorage.getItem("preloaderShown");
    useEffect(() => {
        if (alreadyShown) {
            wrapperRef.current.style.opacity = 1;
        }
    }, [alreadyShown])
    return (
        <section ref={wrapperRef} style={{ opacity: alreadyShown ? 1 : 0 }}>
            <div className="bg-main-video relative">
                <div className="w-full h-full flex justify-center items-end pb-[179px]">
                    <video className="object-cover absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="public/assets/bg-video.mp4"></video>
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                        style={{
                            background: `radial-gradient(rgba(255, 255, 255, 0) 25%, rgb(255, 255, 255) 67%)`,
                        }}
                    ></div>
                    <h1 className="!text-[100px] !text-[#003777] !leading-[96px] !-tracking-[2.5px] font-montserrat font-extrabold z-10">
                        Dosimetry Made Simple
                    </h1>
                </div>
            </div>
            <div>
                <h1 className="!text-[100px] !text-[#003777] !leading-[96px] !-tracking-[2.5px] font-montserrat font-extrabold z-10">
                    Dosimetry Made Simple
                </h1>
            </div>
        </section>
    );
}