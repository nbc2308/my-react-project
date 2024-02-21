import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsByid } from "../../api/product";

const ProductEditPage = ({ onUpdate }) => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getProductsByid(id);
      reset(data);
    })();
  }, [id]);

  const onSubmit = (data) => {
    onUpdate(data);
    navigate("/admin/products");
  };
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Update Product</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="ProductName" className="form-label">
            Product name
          </label>
          <input
            type="text"
            className="form-control"
            {...register("name")}
            id="ProductName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProductImage" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            {...register("image")}
            id="ProductImage"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProductPrice" className="form-label">
            Price
          </label>
          <input
            type="Number"
            className="form-control"
            {...register("price")}
            id="ProductPrice"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            {...register("description")}
            className="form-control"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary text-black">
          Save
        </button>
      </form>
    </>
  );
};

export default ProductEditPage;
