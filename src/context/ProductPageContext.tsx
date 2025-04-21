import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { IImage, IProduct } from "../interfaces";
import { Images } from "../assets";

interface IProductPageContext {
  images: IImage[];
  selectedImage: IImage | undefined;
  selectNewImage: (id: string) => void;
  counter: number;
  changeCounter: (action: string) => void;
  productData: IProduct | undefined;
  isCartVisible: boolean;
  toggleCartVisibility: () => void;
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
  const [counter, setCounter] = useState(1);
  const [productData, setProductData] = useState<IProduct | undefined>();
  const [images] = useState(Images);
  const [selectedImage, setSelectedImage] = useState<IImage | undefined>(
    images[0]
  );

  const [isCartVisible, setIsCartVisible] = useState(false);
  // const [cart, setCart] = useState([]);

  // 2) Устанвить react-router-dom и работать с параметрами ?

  // 3) Реализовать функционал lightbox-галереи
  // 4) Реализвовать функционал добавления в корзину
  // 5) Адаптив
  // 6) Все активные эффекты и состояния
  // 7) Accessablilty (надписи на кнопках и прочее)
  // 8) Рефакторинг кода

  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setProductData(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getProductData();
  }, []);

  const selectNewImage = (id: string) => {
    const newImg = images.find((image) => image.id === id);
    setSelectedImage(newImg);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  const changeCounter = (action: string) => {
    if (action === "inc") setCounter((prev) => prev + 1);
    if (action === "dec" && counter > 0) setCounter((prev) => prev - 1);
  };

  return (
    <ProductPageContext.Provider
      value={{
        images,
        selectedImage,
        selectNewImage,
        counter,
        changeCounter,
        productData,
        isCartVisible,
        toggleCartVisibility,
      }}
    >
      {children}
    </ProductPageContext.Provider>
  );
};
