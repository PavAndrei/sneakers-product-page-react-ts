import { Header } from "./components/Header/Header";
import { Layout } from "./components/Layout/Layout";
import { Main } from "./components/Main/Main";

import { ProductPageProvider } from "./context/ProductPageContext";

import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <ProductPageProvider>
      <Layout>
        <Header />
        <Main>
          <ProductPage />
        </Main>
      </Layout>
    </ProductPageProvider>
  );
}

export default App;
