"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "../../assets/img/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const location = useLocation(); // Aktiv səhifəni tapmaq üçün

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Tours", path: "/tours" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md py-2">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="h-54 w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-base font-medium text-gray-900">
          {navLinks.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.path}
                className={`transition-colors duration-300 ${
                  location.pathname === item.path ? "text-[#0F015D]" : ""
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#0F015D] transition-all duration-300 ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 px-6 pb-4 text-base font-medium text-gray-800">
          {navLinks.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.path}
                className={`relative inline-block transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-[#0F015D]"
                    : "hover:text-[#0F015D]"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#0F015D] transition-all duration-300
      ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}
    `}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
