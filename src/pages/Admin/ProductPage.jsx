import React from "react";

const ProductPage = ({ products }) => {
  return (
    <>
      <h2>Quản lí sản phẩm</h2>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ảnh sản phẩm</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá sản phẩm</th>
              <th scope="col">Header</th>
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
                  <div className="d-flex">
                    <button className="btn btn-danger ">Del</button>
                    <button className="btn btn-primary ml-3">Add</button>
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
