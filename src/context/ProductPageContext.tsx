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
  selectNewImage: (id: string) => void;
  counter: number;
  changeCounter: (action: string) => void;
  productData: IProduct | undefined;
  cartData: ICartItem[] | undefined;
  isCartVisible: boolean;
  toggleCartVisibility: () => void;
  addItemToCart: () => void;
  removeItemFromCart: (id: string) => void;
  calculateOrderQuantity: () => number | undefined;
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
  const [cartData, setCartData] = useState<ICartItem[] | undefined>([]);
  const [selectedImage, setSelectedImage] = useState<IImage | undefined>(
    undefined
  );
  const [isCartVisible, setIsCartVisible] = useState(false);

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
        setSelectedImage(data[0].images[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getProductData();
  }, []);

  const selectNewImage = (id: string) => {
    const newImage = productData?.images.find((img) => img.id === id);
    setSelectedImage(newImage);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  const changeCounter = (action: string) => {
    if (action === "inc") setCounter((prev) => prev + 1);
    if (action === "dec" && counter > 1) setCounter((prev) => prev - 1);
  };

  const addItemToCart = () => {
    if (!productData) return;

    const { id, title, images, price, discount } = productData;
    const image = images?.[0]?.thumbnailSize;

    setCartData((prev = []) => {
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
    setCartData((prev) => prev?.filter((item) => item.id !== id));
  };

  const calculateOrderQuantity = () => {
    return cartData?.reduce((acc, item) => (acc += item.quantity), 0);
  };

  return (
    <ProductPageContext.Provider
      value={{
        selectedImage,
        selectNewImage,
        counter,
        changeCounter,
        productData,
        isCartVisible,
        toggleCartVisibility,
        cartData,
        addItemToCart,
        removeItemFromCart,
        calculateOrderQuantity,
      }}
    >
      {children}
    </ProductPageContext.Provider>
  );
};
