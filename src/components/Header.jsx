import { NavLink } from "react-router-dom";

import "./css/header.css";
import logo from "../assets/Logo/Mahitala.png";

const Header = () => {
  return (
    <>
      <nav className="px-5 border-gray-200 shadow-lg dark:bg-gray-900 bg-[#383A2E]">
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
    </>
  );
};

export default Header;
