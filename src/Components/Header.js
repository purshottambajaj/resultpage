import React, { useState } from "react";
import { FaHome, FaUserAlt, FaBolt, FaChartLine } from "react-icons/fa";
import { MdEmojiEvents, MdOutlineMenuBook } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../img/logo.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Firstbench Logo"
            className="w-8 h-8"
          />
          <span className="text-lg font-semibold">Firstbench</span>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center md:space-x-6 absolute md:static top-16 left-0 bg-gray-900 w-full md:w-auto md:bg-transparent p-4 md:p-0`}
        >
          <a
            href="#dashboard"
            className="flex items-center text-gray-300 hover:text-teal-400 py-2"
          >
            <FaHome className="mr-2" />
            Dashboard
          </a>
          <a
            href="#firstguru"
            className="flex items-center text-gray-300 hover:text-teal-400 py-2"
          >
            <MdEmojiEvents className="mr-2" />
            FirstGuru
          </a>
          <a
            href="#townhall"
            className="flex items-center text-gray-300 hover:text-teal-400 py-2"
          >
            <MdOutlineMenuBook className="mr-2" />
            TownHall
          </a>
          <a
            href="#aievaluation"
            className="flex items-center text-gray-300 hover:text-teal-400 py-2"
          >
            <FaBolt className="mr-2" />
            AI Evaluation
          </a>
          <a
            href="#performance"
            className="flex items-center text-gray-300 hover:text-teal-400 py-2"
          >
            <FaChartLine className="mr-2" />
            Performance
          </a>
          <a
            href="#mocktest"
            className="flex items-center text-gray-300 hover:text-teal-400 py-2"
          >
            <MdOutlineMenuBook className="mr-2" />
            Mock Test
          </a>
        </nav>

        {/* Profile and Notifications */}
        <div className="hidden md:flex items-center space-x-4">
          <IoNotificationsOutline className="text-xl hover:text-teal-400" />
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pink-500 text-white flex items-center justify-center rounded-full">
              P
            </div>
            <div className="text-gray-300 hover:text-teal-400 cursor-pointer">
              Profile
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
