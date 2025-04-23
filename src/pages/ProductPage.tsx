import { Cart } from "../components/Cart/Cart";
import { ProductContent } from "../components/ProductContent/ProductContent";
import { ProductGallery } from "../components/ProductGallery/ProductGallery";
import { ProductWrapper } from "../components/ProductWrapper/ProductWrapper";
import { useCartContext } from "../context/CartContext";

export const ProductPage = () => {
  const { isCartVisible } = useCartContext();

  return (
    <div>
      <ProductWrapper>
        <ProductGallery />
        <ProductContent />
        {isCartVisible && <Cart />}
      </ProductWrapper>
    </div>
  );
};
