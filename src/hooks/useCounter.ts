import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);

  const changeCounter = (action: "inc" | "dec") => {
    setCount((prev) => (action === "inc" ? prev + 1 : Math.max(1, prev - 1)));
  };

  return { count, changeCounter };
};
