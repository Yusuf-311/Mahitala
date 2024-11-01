import { Link } from "react-router-dom";

import "./css/header.css";
import logo from "../assets/Logo/logo-mahitala.png";

Link;
function Header() {
  return (
    <nav className="px-5 border-gray-200 shadow-lg dark:bg-gray-900 bg-main-mahitala">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Mahitala" />
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
            <li className="border border-e-0 bg-sec-mahitala">
              <Link
                to="/"
                className="block px-20 text-xl text-white py-7 :bg-transparent "
                aria-current="page"
              >
                Halaman Utama
              </Link>
            </li>
            <li className="border bg-sec-mahitala">
              <Link
                to="/forum-diskusi"
                className="block px-20 text-xl text-white py-7 :bg-transparent"
              >
                Forum Diskusi
              </Link>
            </li>
            <li className="border border-s-0 bg-sec-mahitala">
              <Link
                to="/about"
                className="block px-20 text-xl text-white py-7 :bg-transparent"
              >
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </nav>
  );
}

export default Header;
