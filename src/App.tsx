import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

import { ProductPageProvider } from "./context/ProductPageContext";

import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <ProductPageProvider>
      <Header />
      <Main>
        <ProductPage />
      </Main>
    </ProductPageProvider>
  );
}

export default App;
