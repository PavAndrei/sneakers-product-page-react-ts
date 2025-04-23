import { CartProvider } from "./CartContext";
import { GalleryProvider } from "./GalleryContext";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <GalleryProvider>{children}</GalleryProvider>
    </CartProvider>
  );
};
