import { Menu } from "lucide-react";
import { useScrollTop } from "../hooks/useScrollTop";
import Navbar from "./Navbar";
import Sidemenu from "./Sidemenu";
import { useActiveLink } from "../AppContext";

const Header = () => {
  const isScrolled = useScrollTop(50);
  const { setMenuOpen } = useActiveLink();

  return (
    <>
      <header
        className={`flex justify-between z-30 fixed top-0 w-full items-center  bg-black/85 sm:px-16 px-8 py-4 ${
          isScrolled && "shadow shadow-gray-50/15 backdrop-blur-sm"
        }`}
      >
        <h1 className="text-white text-[20px] font-bold">JustAnotherUIKit</h1>
        <Navbar />

        <button
          onClick={() => setMenuOpen(true)}
          className="sm:hidden block text-white"
        >
          <Menu />
        </button>
      </header>
      <Sidemenu />
    </>
  );
};
export default Header;
