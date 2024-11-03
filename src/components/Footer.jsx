import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#383A2E] p-10 mt-11 sticky ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[26.25px] text-white">MahitalaApp</h1>
            <p className="text-white">
              Solusi terpercaya untuk membantu petani mengelola risiko terkait
              perubahan cuaca ekstrem.
            </p>
          </div>
          <div className="text-end ">
            <NavLink
              to="/forum-diskusi"
              className="block text-lg text-white"
              aria-current="page"
            >
              Forum Diskusi
            </NavLink>

            <NavLink
              to="/about"
              className="block text-lg text-white"
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
