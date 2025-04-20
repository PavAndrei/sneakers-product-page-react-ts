import { createContext, ReactNode, useContext, useState } from "react";

import { IImage } from "../interfaces";
import { Images } from "../assets";

interface IProductPageContext {
  images: IImage[];
  selectedImage: IImage | undefined;
  selectNewImage: (id: string) => void;
}

export const ProductPageContext = createContext<
  IProductPageContext | undefined
>(undefined);

export const useProductPageContext = () => {
  const context = useContext(ProductPageContext);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};

interface ProductPageProviderProps {
  children: ReactNode;
}

export const ProductPageProvider = ({ children }: ProductPageProviderProps) => {
  const [images] = useState(Images);
  const [selectedImage, setSelectedImage] = useState<IImage | undefined>(
    images[0]
  );

  const selectNewImage = (id: string) => {
    const newImg = images.find((image) => image.id === id);

    setSelectedImage(newImg);
  };

  return (
    <ProductPageContext.Provider
      value={{ images, selectedImage, selectNewImage }}
    >
      {children}
    </ProductPageContext.Provider>
  );
};
