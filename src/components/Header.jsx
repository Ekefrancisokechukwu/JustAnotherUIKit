import { useScrollTop } from "../hooks/useScrollTop";
import Navbar from "./Navbar";

const Header = () => {
  const isScrolled = useScrollTop(50);

  return (
    <header
      className={`flex justify-between z-30 fixed top-0 w-full items-center  bg-black/85 px-16 py-4 ${
        isScrolled && "shadow shadow-gray-50/15 backdrop-blur-sm"
      }`}
    >
      <h1 className="text-white text-[20px] font-bold">JustAnotherUIKit</h1>
      <Navbar />
    </header>
  );
};
export default Header;
