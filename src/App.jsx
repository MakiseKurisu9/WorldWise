import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
          {/*will display this page while inputing some url not included in
          router*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
