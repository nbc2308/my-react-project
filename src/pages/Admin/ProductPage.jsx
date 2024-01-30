import React from "react";
import { Link } from "react-router-dom";

const ProductPage = ({ products, onRemove }) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lí sản phẩm</h1>
        <Link to="add" className="btn btn-sm btn-outline-primary">
          Add product
        </Link>
      </div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product image</th>
              <th scope="col">Product name</th>
              <th scope="col">Product price</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20"
                  />
                </td>
                <td>{product.name}</td>
                <td>
                  <span>{product.price}</span>
                </td>
                <td>
                  <span>{product.description}</span>
                </td>
                <td>
                  <div className="d-flex">
                    <button
                      className="btn btn-danger"
                      onClick={() => onRemove(product.id)}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/admin/products/${product.id}/edit`}
                      className="btn btn-primary ml-3"
                    >
                      Update
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductPage;
