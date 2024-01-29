import { Route, Routes } from "react-router-dom";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import Show from "./pages/Client/Show";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoradPage from "./components/DashBoradPage";
import ProductPage from "./pages/Admin/ProductPage";
import { useEffect, useState } from "react";
import { addProduct, getProducts } from "./api/product";
import AddProductForm from "./components/layouts/AddProductForm";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      // console.log(data);
      setProducts(data);
    })();
  }, []);

  const onHandleAdd = async (products) => {
    try {
      const data = await addProduct(products);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleRemove = async (id) => {
    try {
      await removeProductsByid(id);
      toast.success("Delete success");
      //rerender
      products.filter((products) => products.id !== id);
    } catch (error) {
      toast.error("Delete fail!");
    }
  };

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
            element={
              <ProductPage products={products} onRemove={onHandleRemove} />
            }
          />
          <Route
            path="products/add"
            element={<AddProductForm onAdd={onHandleAdd} />}
          />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
