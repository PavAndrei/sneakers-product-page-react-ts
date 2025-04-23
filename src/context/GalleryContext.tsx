import { createContext, useContext } from "react";
import { useGalleryNavigation } from "../hooks/useGalleryNavigation";
import { useProductData } from "../hooks/useProductData";
import { IImage, IProduct } from "../interfaces";

export type GalleryContextValue = {
  productData?: IProduct;
  selectedImage?: IImage;
  sliderImage?: IImage;
  sliderNavigation?: IImage[];
  isModalOpen: boolean;
  selectNewImage: (id: string, type: "modal" | "page") => void;
  openModal: () => void;
  closeModal: () => void;
  filpSlides: (action: "inc" | "dec") => void;
  isImageSelected: (id: string) => boolean;
  isSliderImageSelected: (id: string) => boolean;
  isPageImageSelected: (id: string) => boolean;
};

const GalleryContext = createContext<GalleryContextValue | undefined>(
  undefined
);

export const GalleryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const productData = useProductData();
  const gallery = useGalleryNavigation(productData);

  return (
    <GalleryContext.Provider value={{ productData, ...gallery }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  const context = useContext(GalleryContext);
  if (!context)
    throw new Error("useGalleryContext must be used within GalleryProvider");
  return context;
};
