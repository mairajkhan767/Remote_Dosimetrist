import React from "react";

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto px-6 flex items-center justify-between h-20 py-[22px] px-[140px]">
        
        {/* Left Navigation */}
        <nav className="flex space-x-8 text-gray-800 font-medium text-sm">
          <a href="#home" className="hover:text-purple-700 transition-colors">Home</a>
          <a href="#about" className="hover:text-purple-700 transition-colors">About Us</a>
          <a href="#focus" className="hover:text-purple-700 transition-colors">Areas of Focus</a>
          <a href="#plans" className="hover:text-purple-700 transition-colors">Our Plans</a>
        </nav>

        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="assets/logo-main.png" alt="Remote Dosimetrist Logo" className="h-12 w-auto" />
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-8">
          <nav className="flex space-x-8 text-gray-800 font-medium text-sm">
            <a href="#process" className="hover:text-purple-700 transition-colors">Process</a>
            <a href="#contact" className="hover:text-purple-700 transition-colors">Contact Us</a>
          </nav>

          {/* Button */}
          <a
            href="#get-in-touch"
            className="bg-[#434961] text-white px-5 py-2 rounded-xl shadow-lg hover:bg-gray-700 transition-colors text-sm font-medium"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </header>
  );
}