"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { usePreloader } from './PreloaderContext'

export default function Popup() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { alreadyShown } = usePreloader();

    useEffect(() => {
        const alreadyClosed = localStorage.getItem("popupClosed");
        if (alreadyClosed || pathname === "/contact") return;
        if (alreadyShown){
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
        
    }, [alreadyShown]);

    const closePopup = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto"; // enable scroll
    };

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-100 flex flex-col justify-center items-center">
        <div className="absolute h-full w-full bg-black/85 z-0" onClick={closePopup}></div>
        <div className="popup__content relative w-[1100px] z-50 flex flex-row items-center justify-center bg-white rounded-3xl overflow-hidden">
            <button className="absolute top-[10px] right-[20px] font-bold text-[20px] cursor-pointer border-none bg-transparent! text-black!" onClick={closePopup}>
                ✕
            </button>
            <div className="w-full h-full p-5 relative flex flex-col justify-start items-end"
                style={{
                    backgroundImage: 'url(/assets/about-bg.jpg)',
                    backgroundSize: 'cover'
                }}>
            </div>
            <div className="w-full p-10 flex flex-col gap-10">
                <h3 className="text-[#003777] text-[22px] md:text-[37px] font-extrabold uppercase tracking-wide leading-[1.1] transition-colors duration-500">
                    We would love to hear from you!
                </h3>
                <p className="text-[#434961] text-[16px] md:text-[17px] leading-[26px] md:leading-[28px]">
                    We are so confident that you will appreciate and value our services, that we will create radiation plans for FREE for the first month from the date of the signed contract (maximum 2 plans per week for the first month).  In essence, it’s a “try before you buy” structure with no strings attached! 
                </p>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <a href="/contact" className="ip-btn ip-btn-primary gap-[3px]! ">Get In Touch <span>→</span></a>
                    <button className="ip-btn ip-btn-primary"
                    onClick={() => {
                        localStorage.setItem("popupClosed", "true");
                        setIsOpen(false);
                        document.body.style.overflow = "auto";
                    }}>
                        Not! Just Yet.
                    </button>
                </div>
            </div>

        </div>
        </div>
    );
}