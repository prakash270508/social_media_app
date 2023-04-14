import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { regiser } from "../Redux/services/userService";

const SignUp2 = () => {
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occuption: "",
    picturePath: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "picturePath") {
      setRegisterForm((preValue) => ({
        ...preValue,
        [name]: files[0].name,
      }));
    } else {
      setRegisterForm((preValue) => ({
        ...preValue,
        [name]: value,
      }));
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    dispatch(regiser(registerForm));
    toast.success("Registration Successfull");

    navigate("/auth/login");
  };

  return (
    <div className="mx-5 my-5">
      <h1 className="text-center ">
        <b>Register </b>
      </h1>
      <form onSubmit={handleRegisterSubmit}>
        <div className="form-group row my-3">
          <div className="col-6">
            <label htmlFor="firstname">
              <b className="mx-1">First Name</b>
            </label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Enter First Name"
              onChange={handleChange}
              value={registerForm.firstName}
            />
          </div>
          <div className="col-6">
            <label htmlFor="exampleInputEmail1">
              <b className="mx-1">Last Name</b>
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Enter Last Name"
              onChange={handleChange}
              value={registerForm.lastName}
            />
          </div>
        </div>
        <div className="form-group ">
          <label htmlFor="exampleInputEmail1">
            <b className="mx-1">Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="form-control my-2"
            onChange={handleChange}
            value={registerForm.email}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="exampleInputEmail1">
            <b className="mx-1">Profile Picture</b>
          </label>
          <input
            type="file"
            name="picturePath"
            accept="image/*"
            placeholder="Enter Your Email"
            className="form-control my-2"
            onChange={handleChange}
          />
        </div>
        <div className="form-group row my-3">
          <div className="col-6">
            <label htmlFor="firstname">
              <b className="mx-1">Occuption</b>
            </label>
            <input
              type="text"
              name="occuption"
              className="form-control"
              placeholder="Enter Occuption"
              onChange={handleChange}
              value={registerForm.occuption}
            />
          </div>
          <div className="col-6">
            <label htmlFor="exampleInputEmail1">
              <b className="mx-1">Location</b>
            </label>
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Enter Location"
              onChange={handleChange}
              value={registerForm.location}
            />
          </div>
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">
            <b className="mx-1">Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="form-control my-1"
            onChange={handleChange}
            value={registerForm.password}
          />
        </div>
        <div className="row my-5">
          <div className="col-4"></div>
          <div className="col-4" style={{ paddingLeft: "8vw" }}>
            <button type="submit" className="btn btn-outline-secondary">
              Register
            </button>
          </div>
          <div
            className="col-4"
            style={{ marginTop: "12px", paddingLeft: "7vw" }}
          >
            <Link to={"/auth/login"}>Already have account</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp2;
