import { ProductContent } from "../components/ProductContent/ProductContent";
import { ProductGallery } from "../components/ProductGallery/ProductGalley";
import { ProductWrapper } from "../components/ProductWrapper/ProductWrapper";

export const ProductPage = () => {
  return (
    <div>
      <ProductWrapper>
        <ProductGallery />
        <ProductContent />
      </ProductWrapper>
    </div>
  );
};
