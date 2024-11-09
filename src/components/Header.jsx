import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./css/header.css";
import logo from "../assets/Logo/Mahitala.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="px-5 border-gray-200 shadow-lg dark:bg-gray-900 bg-[#383A2E] hidden lg:block">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="w-40" alt="Mahitala" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            ></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="border border-e-0 hover:bg-[#6c7d41]">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block px-20 text-xl text-white py-7 ${isActive ? "bg-[#6c7d41]" : ""}`
                  }
                  aria-current="page"
                >
                  Halaman Utama
                </NavLink>
              </li>
              <li className="border hover:bg-[#6c7d41]">
                <NavLink
                  to="/forum-diskusi"
                  className={({ isActive }) =>
                    `block px-20 text-xl text-white py-7 ${isActive ? "bg-[#6c7d41]" : ""}`
                  }
                  aria-current="page"
                >
                  Forum Diskusi
                </NavLink>
              </li>
              <li className="border border-s-0 hover:bg-[#6c7d41]">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block px-20 text-xl text-white py-7 ${isActive ? "bg-[#6c7d41]" : ""}`
                  }
                  aria-current="page"
                >
                  Tentang Kami
                </NavLink>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </nav>
      <nav className="bg-[#383A2E] border-gray-200 dark:bg-gray-900 lg:hidden ">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Mahitala Logo" />
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-white rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <a
                  href="/"
                  className="block px-3 py-2 text-white rounded md:bg-transparent md:bg-[#383A2E] md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Halaman Utama
                </a>
              </li>
              <li>
                <a
                  href="/forum-diskusi"
                  className="block px-3 py-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {" "}
                  Forum Diskusi{" "}
                </a>
              </li>
              <li>
                <a
                  href="/tentang-kami"
                  className="block px-3 py-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
