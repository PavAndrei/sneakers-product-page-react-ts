import { Header } from "./components/Header/Header";
import { Layout } from "./components/Layout/Layout";
import { Main } from "./components/Main/Main";
import { CartProvider } from "./context/CartContext";
import { DropdownProvider } from "./context/DropDownContext";
import { GalleryProvider } from "./context/GalleryContext";

import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <Layout>
      <CartProvider>
        <DropdownProvider>
          <Header />
        </DropdownProvider>
        <GalleryProvider>
          <Main>
            <ProductPage />
          </Main>
        </GalleryProvider>
      </CartProvider>
    </Layout>
  );
}

export default App;
