import { useActiveLink } from "../AppContext";

const links = [
  {
    path: "#home",
    label: "Home",
  },
  {
    path: "#about",
    label: "About",
  },
  {
    path: "#contact",
    label: "Contact",
  },
  {
    path: "#blog",
    label: "Blog",
  },
];

const Navbar = () => {
  const { currentPage, setCurrentPage, setTimeOfLastClick } = useActiveLink();

  return (
    <nav className="sm:block hidden">
      <ul className="flex items-center gap-x-4">
        {links.map((link, i) => {
          return (
            <li key={i}>
              <a
                onClick={() => {
                  setCurrentPage(link.path);
                  setTimeOfLastClick(Date.now());
                }}
                href={link.path}
                className={`text-[16px] font-[200] px-3 py-4 inline-block ${
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
    </nav>
  );
};
export default Navbar;
