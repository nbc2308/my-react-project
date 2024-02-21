import { Route, Routes } from "react-router-dom";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import Show from "./pages/Client/Show";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoradPage from "./components/DashBoradPage";
import ProductPage from "./pages/Admin/ProductPage";
import { useEffect, useState } from "react";
import {
  addProduct,
  getProducts,
  removeProductsByid,
  updateProduct,
} from "./api/product";
import AddProductForm from "./pages/Admin/product-add.jsx";
import { ToastContainer, toast } from "react-toastify";
import ProductEditPage from "./pages/Admin/product-update.jsx";
import ProductPageWebsite from "./pages/Client/productsPage.jsx";
import ProfileEdit from "./pages/Admin/ProfileEdit.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      // console.log(data);
      setProducts(data);
    })();
  }, []);

  const onHandleAdd = async (product) => {
    try {
      const data = await addProduct(product);
      toast.success("Add success");
      //rerender
      setProducts([...products, data]);
    } catch (error) {
      toast.error("Add fail!");
    }
  };

  const onHandleUpdate = async (product) => {
    try {
      const data = await updateProduct(product);
      toast.success("Edit success");
      //rerender
      setProducts(
        products.map((item) => (item.id === product.id ? product : item))
      );
    } catch (error) {
      toast.error("Edit fail!");
    }
  };

  const onHandleRemove = async (id) => {
    const confirm = window.confirm("you sure?");
    if (confirm) {
      try {
        console.log(id);
        await removeProductsByid(id);
        toast.success("Delete success");
        //rerender
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        toast.error("Delete fail!");
      }
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<Show />} />
          <Route
            path="products"
            element={<ProductPageWebsite products={products} />}
          />
        </Route>
        <Route path="signup" element={<Signup />} />

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
          <Route
            path="products/:id/edit"
            element={<ProductEditPage onUpdate={onHandleUpdate} />}
          />
          <Route path="profile" element={<ProfileEdit />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
