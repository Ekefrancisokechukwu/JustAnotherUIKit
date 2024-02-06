import { X } from "lucide-react";
import { useActiveLink } from "../AppContext";
import { links } from "./Navbar";

const Sidemenu = () => {
  const {
    setCurrentPage,
    currentPage,
    setTimeOfLastClick,
    setMenuOpen,
    menuOpen,
  } = useActiveLink();

  return (
    <div
      className={`sm:hidden z-50 transition-all duration-200 block ${
        menuOpen ? " visible " : "invisible "
      }`}
    >
      <div
        onClick={() => setMenuOpen(false)}
        className={`bg-black/50 fixed z-50 top-0 left-0 w-screen h-screen ${
          menuOpen ? " visible  opacity-100" : "invisible opacity-0 "
        }`}
      ></div>
      <aside
        className={`max-w-[20rem] w-full z-50 bg-black py-4 fixed top-0 right-0 h-screen border-l duration-300 transition-all border-gray-50/55 ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="w-full  flex justify-end pr-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white w-5 h-5 "
          >
            <X />
          </button>
        </div>
        <ul className="flex flex-col gap-y-5">
          {links.map((link, i) => {
            return (
              <li key={i} className="w-full">
                <a
                  onClick={() => {
                    setCurrentPage(link.path);
                    setTimeOfLastClick(Date.now());
                    setMenuOpen(false);
                  }}
                  href={link.path}
                  className={`text-[16px] font-[200] w-full px-3 py-4 inline-block ${
                    link.path === currentPage
                      ? "font-bold text-white"
                      : "text-white/50 "
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};
export default Sidemenu;
