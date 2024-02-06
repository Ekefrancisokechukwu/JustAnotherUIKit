import { useState, createContext, useContext } from "react";

const ActiveContext = createContext();

const ActiveProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("#home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        setTimeOfLastClick,
        timeOfLastClick,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export const useActiveLink = () => {
  const context = useContext(ActiveContext);
  if (context === null) {
    throw new Error("useActive must be used within an ActiveSectionProvider");
  }
  return context;
};

export default ActiveProvider;
