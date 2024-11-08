import logo from "../assets/Logo/Mahitala.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#383A2E] p-10  sticky ">
        <div className="items-center justify-between lg:flex">
          <div className="text-center lg:text-start">
            <img src={logo} className="w-40 mx-auto lg:mx-0" alt="" />
            <hr className="my-3 border border-white lg:hidden" />
            <p className="mt-4 text-center text-white lg:text-start">
              Solusi terpercaya untuk membantu petani mengelola risiko terkait
              <br />
              perubahan cuaca ekstrem.
            </p>
            <hr className="hidden my-12 border-white border- lg:block" />
          </div>
          <div className="mt-5 space-y-4 text-center lg:mt-0 lg:text-end">
            <NavLink
              to="/forum-diskusi"
              className="block  text-white text-[12px] "
              aria-current="page"
            >
              Forum Diskusi
            </NavLink>

            <NavLink
              to="/about"
              className="block  text-white text-[12px]"
              aria-current="page"
            >
              Tentang Kami
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
