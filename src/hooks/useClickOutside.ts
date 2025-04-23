import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement> | RefObject<null>,
  cb: () => void,
  isOpen: boolean
) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (event: MouseEvent) => {
      if (
        ref?.current &&
        !ref.current.contains(event.target as Node) &&
        isOpen
      ) {
        cb();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        cb();
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [ref, cb, isOpen]);
};
