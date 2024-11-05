import logo from "../assets/Logo/Mahitala.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#383A2E] p-10  sticky ">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} className="w-40" alt="" />
            <p className="mt-4 text-white">
              Solusi terpercaya untuk membantu petani mengelola risiko terkait
              perubahan cuaca ekstrem.
            </p>
          </div>
          <div className="text-end ">
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
