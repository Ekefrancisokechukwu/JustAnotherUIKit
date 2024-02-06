import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveLink } from "../AppContext";

export const useActiveSection = (section) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { setCurrentPage, currentPage, timeOfLastClick, setTimeOfLastClick } =
    useActiveLink();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setCurrentPage(section);
    }
  }, [
    inView,
    section,
    setCurrentPage,
    currentPage,
    timeOfLastClick,
    setTimeOfLastClick,
  ]);

  return { ref };
};
