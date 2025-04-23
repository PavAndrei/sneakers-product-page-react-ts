import { useEffect } from "react";

export const useBodyScrollLock = (shouldLock: boolean) => {
  useEffect(() => {
    const body = document.body;

    if (shouldLock) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [shouldLock]);
};
