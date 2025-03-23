import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white flex items-center justify-between px-6 py-2 text-sm">
        <div className="flex items-center gap-3">
          <img src="https://cdn-icons-png.flaticon.com/128/197/197484.png" alt="USA" className="w-6 h-6" />
          <img src="https://cdn-icons-png.flaticon.com/128/197/197430.png" alt="Canada" className="w-6 h-6" />
          <img src="https://cdn-icons-png.flaticon.com/128/197/197374.png" alt="UK" className="w-6 h-6" />
          <img src="https://cdn-icons-png.flaticon.com/128/323/323367.png" alt="Australia" className="w-6 h-6" />
          <span>
            Attend our in-person Robotics & Math{" "}
            <span className="font-bold text-yellow-300">FREE WORKSHOP</span> for your child (7-18yrs old){" "}
            <span className="font-bold">IN YOUR CITY</span>
          </span>
        </div>
        <div>
          <button className="bg-red-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-600">
            Reserve a seat today!
          </button>
          {/* <span className="ml-2 text-gray-200">(No credit card needed)</span> */}
        </div>
        <div className="flex gap-4">
          {/* <span>📧 inquiry@moonpreneur.com</span> */}
          <span>📞 +1 (855) 550-0571</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="https://moonpreneur.com/assets/images/logo/moonpreneur-logo.svg" alt="Moonpreneur Logo" className="w-32" />
          {/* <span className="text-lg font-semibold">Future-proofing the Next Generation</span> */}
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Innovator Program ▾</li>
          <li className="hover:text-blue-600 cursor-pointer">Advanced Programs ▾</li>
          <li className="hover:text-blue-600 cursor-pointer">Student Projects ▾</li>
          <li className="hover:text-blue-600 cursor-pointer">Tech Conference ▾</li>
          <li className="hover:text-blue-600 cursor-pointer">Pricing ▾</li>
          <li className="hover:text-blue-600 cursor-pointer">Resources ▾</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Login
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Book a Free Trial
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
