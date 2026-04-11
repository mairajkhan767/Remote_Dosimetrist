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
        <div className="popup__content w-[635px] z-50 flex flex-col items-center justify-start bg-white rounded-3xl overflow-hidden">
            <div className="w-full min-h-[430px] p-10 relative"
                style={{
                    backgroundImage: 'url(/assets/Medical-Assistance.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div 
                    className="absolute inset-0 z-0 bg-black opacity-50"
                />
                <h2 className="text-white z-50 text-2xl md:text-[40px] font-black leading-[1.12] -tracking-[1px] relative mt-3 w-75 capitalize text-left">
                    Looking to get in Touch
                </h2>
            </div>
            <div className="w-full p-10 flex flex-col gap-5">
                <h3 className="text-[#003777] text-[22px] md:text-[26px] font-extrabold uppercase tracking-wide transition-colors duration-500">
                    We would love to hear from you!
                </h3>
                <p className="text-[#434961] text-[16px] md:text-[17px] leading-[26px] md:leading-[28px]">
                    We are so confident that you will appreciate and value our services, that we will create radiation plans for FREE for the first month from the date of the signed contract (maximum 2 plans per week for the first month).  In essence, it’s a “try before you buy” structure with no strings attached! 
                </p>
                <div className="flex flex-row gap-10 justify-center items-center">
                    <a href="/contact" className="ip-btn ip-btn-primary">Get In Touch <span>→</span></a>
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