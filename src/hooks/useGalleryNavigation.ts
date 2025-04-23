import { useState, useEffect } from "react";
import { IImage, IProduct } from "../interfaces";
import { useBodyScrollLock } from "./useBodyScrollLock";

export const useGalleryNavigation = (product?: IProduct) => {
  const [selectedImage, setSelectedImage] = useState<IImage>();
  const [sliderImage, setSliderImage] = useState<IImage>();
  const [sliderNavigation, setSliderNavigation] = useState<IImage[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      setSliderNavigation(product.images);
    }
  }, [product]);

  useEffect(() => {
    setSliderImage(selectedImage);
  }, [selectedImage]);

  const selectNewImage = (id: string, type: "modal" | "page") => {
    const newImage = product?.images.find((img) => img.id === id);
    if (!newImage) return;

    if (type === "modal") {
      setSliderImage(newImage);
    } else {
      setSelectedImage(newImage);
    }
  };

  const openModal = () => {
    if (selectedImage) setSliderImage(selectedImage);
    setIsModalOpen(true);
  };

  useBodyScrollLock(isModalOpen);

  const closeModal = () => setIsModalOpen(false);

  const filpSlides = (action: "inc" | "dec") => {
    if (!sliderImage || !sliderNavigation) return;
    const currentIndex = sliderNavigation.findIndex(
      (img) => img.id === sliderImage.id
    );
    const nextIndex =
      action === "inc"
        ? (currentIndex + 1) % sliderNavigation.length
        : (currentIndex - 1 + sliderNavigation.length) %
          sliderNavigation.length;
    setSliderImage(sliderNavigation[nextIndex]);
  };

  const isImageSelected = (id: string) =>
    isModalOpen ? sliderImage?.id === id : selectedImage?.id === id;

  return {
    selectedImage,
    sliderImage,
    sliderNavigation,
    isModalOpen,
    selectNewImage,
    openModal,
    closeModal,
    filpSlides,
    isImageSelected,
    isSliderImageSelected: (id: string) => sliderImage?.id === id,
    isPageImageSelected: (id: string) => selectedImage?.id === id,
  };
};
