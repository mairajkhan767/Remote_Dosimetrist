import React from "react";
import GetInTouch from "../components/GetInTouch";
import ReviewSlider from "../components/review-slider";

export default function Process() {
    return (
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
                        Our Methods
                    </h1>
                </div>
            </div>

            {/* Methods Section */}
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
                            How It Works
                        </h2>
                    </div>
                    <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px] max-w-[800px]">
                        This can be accomplished by such methods as (often include enabling two-factor authentication for remote network access):
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Method 1 */}
                    <div className="bg-[#F9FAFB] p-8 rounded-[32px] flex flex-col gap-4">
                        <h3 className="text-[#003777] text-[32px] font-bold">1. Direct Citrix Access</h3>
                        <p className="text-[#434961] text-[20px] leading-[30px]">
                            Direct Citrix access to your server and treatment planning system.
                        </p>
                        <a href="https://www.citrix.com/solutions/healthcare/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Learn more about Citrix</a>
                    </div>

                    {/* Method 2 */}
                    <div className="bg-[#F9FAFB] p-8 rounded-[32px] flex flex-col gap-4">
                        <h3 className="text-[#003777] text-[32px] font-bold">2. RSA SecurID</h3>
                        <p className="text-[#434961] text-[20px] leading-[30px]">
                            RSA SecurID gives highly secure VPN access to your server and treatment planning system. A user must enter a personal PIN to ensure that unsecured access is not granted.
                        </p>
                        <a href="https://www.rsa.com/en-us/products/rsa-securid-suite/rsa-securid-access" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Learn more about RSA</a>
                    </div>

                    {/* Method 3 */}
                    <div className="bg-[#F9FAFB] p-8 rounded-[32px] flex flex-col gap-4">
                        <h3 className="text-[#003777] text-[32px] font-bold">3. Imprivata ID</h3>
                        <p className="text-[#434961] text-[20px] leading-[30px]">
                            Imprivata ID gives highly secure VPN access to your server and treatment planning system. A user must use their fingerprint on their device to ensure that unsecured access is not granted.
                        </p>
                        <a href="https://www.imprivata.com/remote-access" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Learn more about Imprivata</a>
                    </div>

                    {/* Method 4 */}
                    <div className="bg-[#F9FAFB] p-8 rounded-[32px] flex flex-col gap-4">
                        <h3 className="text-[#003777] text-[32px] font-bold">4. VMWare Horizon</h3>
                        <p className="text-[#434961] text-[20px] leading-[30px]">
                            VMWare Horizon via personal password grants access to a local on-site desktop. Access to the treatment planning system is granted via the on-site desktop.
                        </p>
                        <a href="https://www.vmware.com/ca/products/horizon.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Learn more about VMWare</a>
                    </div>
                </div>
            </div>

            {/* Additional Info Section */}
            <div className="py-16 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-1">
                        {/* Placeholder or existing image */}
                        <img src="assets/information.jpg" alt="Process" className="rounded-[32px] w-full object-cover shadow-lg" />
                    </div>
                    <div className="lg:order-2 flex flex-col gap-6">
                        <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">Additional Information</h2>
                        <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                            Unlike other dosimetry companies that require that you send them DICOM files for them to calculate your plans, we will NEVER be in possession of your legally protected and highly sensitive patient information on our systems. We calculate YOUR radiation treatment plans on YOUR radiation treatment planning system with YOUR commissioned linear accelerator beam data. We are never required to have your beam data for us to help you!
                        </p>
                        <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                            Once we learn Radiation Oncologist preferences and department requirements, we are ready to securely login to your treatment planning system. The dosimetrists at Remote Dosimetrist will work with your pre-existing departmental dosimetry worksheets with your specific objectives for target volumes and constraints for nearby sensitive organs.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Hire Section reuse structure */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-2">
                        <img src="assets/img-4.png" alt="Why Hire" className="rounded-[32px] w-full object-cover shadow-lg" />
                    </div>
                    <div className="lg:order-1 flex flex-col gap-6">
                        <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px]">Why Hire A Remote Dosimetrist?</h2>
                        <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                            While the number of cancer patients increases and the demand for professional dosimetrists remains high, it’s not always feasible for smaller, rural centers to have full-time dosimetrists on the staff. If the patient demand isn’t enough for a small town, hiring a remote worker makes more sense.
                        </p>
                        <p className="text-[#434961] text-[26px] leading-[37px] -tracking-[0.65px]">
                            Using remote treatment planning can be cost-effective for many organizations while allowing for steady patient growth. Even if your caseloads increase, you can avoid adding full-time employees, without affecting your bottom line.
                        </p>
                    </div>
                </div>
            </div>

            <ReviewSlider />
            <GetInTouch />
        </section>
    );
}
