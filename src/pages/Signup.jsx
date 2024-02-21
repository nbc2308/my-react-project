import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`http://localhost:3000/signup`, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    navigate("/signin");
  };
  return (
    <>
      <div className="">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="ProductName" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              {...register("email")}
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ProductImage" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              {...register("password")}
              id="password"
            />
          </div>

          <button type="submit" className="btn btn-primary text-black">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
