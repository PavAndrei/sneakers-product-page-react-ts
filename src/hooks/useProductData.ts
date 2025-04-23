import { useEffect, useState } from "react";
import { IProduct } from "../interfaces";

export const useProductData = () => {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setProduct(data[0]);
    };
    fetchData();
  }, []);

  return product;
};
