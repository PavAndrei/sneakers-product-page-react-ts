import { Header } from "./components/Header/Header";
import { Layout } from "./components/Layout/Layout";
import { Main } from "./components/Main/Main";
import { CartProvider } from "./context/CartContext";
import { GalleryProvider } from "./context/GalleryContext";

import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <Layout>
      <CartProvider>
        <Header />
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
