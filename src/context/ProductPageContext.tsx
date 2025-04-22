// import {
//   createContext,
//   ReactNode,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// import { ICartItem, IImage, IProduct } from "../interfaces";

// interface IProductPageContext {
//   selectedImage: IImage | undefined;
//   sliderImage: IImage | undefined;
//   selectNewImage: (id: string, type: "page" | "modal") => void;
//   counter: number;
//   changeCounter: (action: "inc" | "dec") => void;
//   productData: IProduct | undefined;
//   cartData: ICartItem[] | undefined;
//   isCartVisible: boolean;
//   toggleCartVisibility: () => void;
//   addItemToCart: () => void;
//   removeItemFromCart: (id: string) => void;
//   calculateOrderQuantity: () => number | undefined;
//   isModalOpen: boolean;
//   openModal: () => void;
//   closeModal: () => void;
//   sliderNavigation: IImage[] | undefined;
//   filpSlides: (action: "dec" | "inc") => void;
//   isImageSelected: (id: string) => boolean;
// }

// export const ProductPageContext = createContext<
//   IProductPageContext | undefined
// >(undefined);

// export const useProductPageContext = () => {
//   const context = useContext(ProductPageContext);
//   if (!context) {
//     throw new Error("context error");
//   }
//   return context;
// };

// interface ProductPageProviderProps {
//   children: ReactNode;
// }

// export const ProductPageProvider = ({ children }: ProductPageProviderProps) => {
//   const [counter, setCounter] = useState(1);
//   const [productData, setProductData] = useState<IProduct | undefined>();
//   const [cartData, setCartData] = useState<ICartItem[]>([]);
//   const [selectedImage, setSelectedImage] = useState<IImage | undefined>(
//     undefined
//   );
//   const [sliderImage, setSliderImage] = useState<IImage | undefined>(undefined);
//   const [sliderNavigation, setSliderNavigation] = useState<
//     IImage[] | undefined
//   >([]);
//   const [isCartVisible, setIsCartVisible] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const isSliderImageSelected = (id: string) => {
//     return sliderImage?.id === id;
//   };

//   const isPageImageSelected = (id: string) => {
//     return selectedImage?.id === id;
//   };

//   useEffect(() => {
//     const getProductData = async () => {
//       try {
//         const response = await fetch("/data.json");
//         const data = await response.json();
//         setProductData(data[0]);
//         setSelectedImage(data[0].images[0]);
//         setSliderNavigation(data[0].images);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getProductData();
//   }, []);

//   const selectNewImage = (id: string, type: "modal" | "page") => {
//     const newImage = productData?.images.find((image) => image.id === id);
//     if (!newImage) return;

//     if (type === "modal") {
//       setSliderImage(newImage);
//     } else {
//       setSelectedImage(newImage);
//     }
//   };

//   const toggleCartVisibility = () => {
//     setIsCartVisible((prev) => !prev);
//   };

//   const changeCounter = (action: "inc" | "dec") => {
//     if (action === "inc") setCounter((prev) => prev + 1);
//     if (action === "dec" && counter > 1) setCounter((prev) => prev - 1);
//   };

//   const addItemToCart = () => {
//     if (!productData) return;

//     const { id, title, images, price, discount } = productData;
//     const image = images?.[0]?.thumbnailSize;

//     setCartData((prev = []) => {
//       const existingItem = prev.find((item) => item.id === id);

//       const updatedItem = {
//         id,
//         title,
//         image,
//         price,
//         discount,
//         quantity: counter,
//       };

//       if (existingItem && existingItem.quantity === counter) {
//         return prev;
//       }

//       if (existingItem) {
//         return prev.map((item) => (item.id === id ? updatedItem : item));
//       }

//       return [...prev, updatedItem];
//     });
//   };

//   const removeItemFromCart = (id: string) => {
//     setCartData((prev) => prev?.filter((item) => item.id !== id));
//   };

//   const calculateOrderQuantity = () => {
//     return cartData?.reduce((acc, item) => (acc += item.quantity), 0);
//   };

//   const openModal = () => {
//     if (selectedImage) {
//       setSliderImage(selectedImage);
//     }

//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const filpSlides = (action: "dec" | "inc") => {
//     if (!sliderImage || !sliderNavigation) return;

//     const currentIndex = sliderNavigation.findIndex(
//       (img) => img.id === sliderImage.id
//     );
//     if (currentIndex === -1) return;

//     const nextIndex =
//       action === "dec"
//         ? (currentIndex - 1 + sliderNavigation.length) % sliderNavigation.length
//         : (currentIndex + 1) % sliderNavigation.length;

//     setSliderImage(sliderNavigation[nextIndex]);
//   };

//   const isImageSelected = (id: string) => {
//     if (isModalOpen) {
//       return sliderImage?.id === id;
//     }
//     return selectedImage?.id === id;
//   };

//   return (
//     <ProductPageContext.Provider
//       value={{
//         sliderNavigation,
//         filpSlides,
//         selectedImage,
//         selectNewImage,
//         counter,
//         changeCounter,
//         productData,
//         isCartVisible,
//         toggleCartVisibility,
//         cartData,
//         addItemToCart,
//         removeItemFromCart,
//         calculateOrderQuantity,
//         isModalOpen,
//         openModal,
//         closeModal,
//         sliderImage,
//         isImageSelected,
//         isSliderImageSelected,
//         isPageImageSelected,
//       }}
//     >
//       {children}
//     </ProductPageContext.Provider>
//   );
// };

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { ICartItem, IImage, IProduct } from "../interfaces";

interface IProductPageContext {
  selectedImage: IImage | undefined;
  sliderImage: IImage | undefined;
  selectNewImage: (id: string, type: "page" | "modal") => void;
  counter: number;
  changeCounter: (action: "inc" | "dec") => void;
  productData: IProduct | undefined;
  cartData: ICartItem[];
  isCartVisible: boolean;
  toggleCartVisibility: () => void;
  addItemToCart: () => void;
  removeItemFromCart: (id: string) => void;
  calculateOrderQuantity: () => number;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  sliderNavigation: IImage[] | undefined;
  filpSlides: (action: "dec" | "inc") => void;
  isImageSelected: (id: string) => boolean;
  isSliderImageSelected: (id: string) => boolean;
  isPageImageSelected: (id: string) => boolean;
}

export const ProductPageContext = createContext<
  IProductPageContext | undefined
>(undefined);

export const useProductPageContext = () => {
  const context = useContext(ProductPageContext);
  if (!context) throw new Error("context error");
  return context;
};

interface ProductPageProviderProps {
  children: ReactNode;
}

export const ProductPageProvider = ({ children }: ProductPageProviderProps) => {
  const [counter, setCounter] = useState(1);
  const [productData, setProductData] = useState<IProduct>();
  const [cartData, setCartData] = useState<ICartItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<IImage>();
  const [sliderImage, setSliderImage] = useState<IImage>();
  const [sliderNavigation, setSliderNavigation] = useState<IImage[]>();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setProductData(data[0]);
        setSelectedImage(data[0].images[0]);
        setSliderNavigation(data[0].images);
      } catch (error) {
        console.error(error);
      }
    };
    getProductData();
  }, []);

  const selectNewImage = (id: string, type: "modal" | "page") => {
    const newImage = productData?.images.find((image) => image.id === id);
    if (!newImage) return;

    if (type === "modal") {
      setSliderImage(newImage);
    } else {
      setSelectedImage(newImage);
    }
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  const changeCounter = (action: "inc" | "dec") => {
    if (action === "inc") setCounter((prev) => prev + 1);
    if (action === "dec" && counter > 1) setCounter((prev) => prev - 1);
  };

  const addItemToCart = () => {
    if (!productData) return;

    const { id, title, images, price, discount } = productData;
    const image = images?.[0]?.thumbnailSize;

    setCartData((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      const updatedItem = {
        id,
        title,
        image,
        price,
        discount,
        quantity: counter,
      };

      if (existingItem && existingItem.quantity === counter) {
        return prev;
      }

      if (existingItem) {
        return prev.map((item) => (item.id === id ? updatedItem : item));
      }

      return [...prev, updatedItem];
    });
  };

  const removeItemFromCart = (id: string) => {
    setCartData((prev) => prev.filter((item) => item.id !== id));
  };

  const calculateOrderQuantity = () => {
    return cartData.reduce((acc, item) => acc + item.quantity, 0);
  };

  const openModal = () => {
    if (selectedImage) setSliderImage(selectedImage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filpSlides = (action: "dec" | "inc") => {
    if (!sliderImage || !sliderNavigation) return;

    const currentIndex = sliderNavigation.findIndex(
      (img) => img.id === sliderImage.id
    );
    if (currentIndex === -1) return;

    const nextIndex =
      action === "dec"
        ? (currentIndex - 1 + sliderNavigation.length) % sliderNavigation.length
        : (currentIndex + 1) % sliderNavigation.length;

    setSliderImage(sliderNavigation[nextIndex]);
  };

  const isImageSelected = (id: string) => {
    return isModalOpen ? sliderImage?.id === id : selectedImage?.id === id;
  };

  const isSliderImageSelected = (id: string) => {
    return sliderImage?.id === id;
  };

  const isPageImageSelected = (id: string) => {
    return selectedImage?.id === id;
  };

  return (
    <ProductPageContext.Provider
      value={{
        selectedImage,
        sliderImage,
        selectNewImage,
        counter,
        changeCounter,
        productData,
        cartData,
        isCartVisible,
        toggleCartVisibility,
        addItemToCart,
        removeItemFromCart,
        calculateOrderQuantity,
        isModalOpen,
        openModal,
        closeModal,
        sliderNavigation,
        filpSlides,
        isImageSelected,
        isSliderImageSelected,
        isPageImageSelected,
      }}
    >
      {children}
    </ProductPageContext.Provider>
  );
};
