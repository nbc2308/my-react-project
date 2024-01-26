import { Route, Routes } from "react-router-dom";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import Show from "./pages/Client/Show";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoradPage from "./components/DashBoradPage";
import ProductPage from "./pages/Admin/ProductPage";
import { useEffect, useState } from "react";
import { getProducts } from "./api/product";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      // console.log(data);
      setProducts(data);
    })();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<Show />} />
          <Route path="products" element={<h2>ProductPage</h2>} />
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<DashBoradPage />} />
          <Route
            path="products"
            element={<ProductPage products={products} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
