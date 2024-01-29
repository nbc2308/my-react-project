import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddProductForm = ({ onAdd }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    onAdd(data);
    navigate("/admin/products");
  };
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Add Product</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Product name</label>
          <input
            type="text"
            className="form-control"
            {...register("name")}
            id="ProductName"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="text"
            className="form-control"
            {...register("image")}
            id="ProductImage"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="Number"
            className="form-control"
            {...register("price")}
            id="ProductPrice"
          />
        </div>
        <div className="mb-3">
          <label
            id="ProductDes"
            {...register("description")}
            className="form-label"
          >
            Description
          </label>
          <textarea className="form-control" cols="30" rows="10"></textarea>
        </div>

        <button type="submit" className="btn btn-primary text-black">
          Add
        </button>
      </form>
    </>
  );
};

export default AddProductForm;
