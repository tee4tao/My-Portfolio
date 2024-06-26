import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [offPreloader, setOffPreloader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openProject1Modal, setOpenProject1Modal] = useState(false);
  const [openProject2Modal, setOpenProject2Modal] = useState(false);
  const [openProject3Modal, setOpenProject3Modal] = useState(false);
  const [openProject4Modal, setOpenProject4Modal] = useState(false);
  const [openProject5Modal, setOpenProject5Modal] = useState(false);
  const [openProject6Modal, setOpenProject6Modal] = useState(false);
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
        openProject3Modal,
        setOpenProject3Modal,
        openProject4Modal,
        setOpenProject4Modal,
        openProject5Modal,
        setOpenProject5Modal,
        openProject6Modal,
        setOpenProject6Modal,
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
