import { Cart } from "../components/Cart/Cart";
import { ProductContent } from "../components/ProductContent/ProductContent";
import { ProductGallery } from "../components/ProductGallery/ProductGallery";
import { ProductWrapper } from "../components/ProductWrapper/ProductWrapper";
import { useProductPageContext } from "../context/ProductPageContext";

export const ProductPage = () => {
  const { isCartVisible } = useProductPageContext();

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
