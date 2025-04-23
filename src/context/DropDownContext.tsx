import { createContext, useContext, useState, ReactNode } from "react";

interface DropdownContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

export const DropdownProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <DropdownContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a DropdownProvider");
  }
  return context;
};
