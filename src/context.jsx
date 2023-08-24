import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [offPreloader, setOffPreloader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openProject1Modal, setOpenProject1Modal] = useState(false);
  const [openProject2Modal, setOpenProject2Modal] = useState(false);
  const closePreloader = () => {
    setOffPreloader(true);
  };
  const openSidebar = () => {
    setIsOpen(true);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        offPreloader,
        setOffPreloader,
        isOpen,
        openProject1Modal,
        setOpenProject1Modal,
        openProject2Modal,
        setOpenProject2Modal,
        openSidebar,
        closeSidebar,
        closePreloader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
