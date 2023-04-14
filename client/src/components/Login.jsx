import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    console.log(loginForm);
    navigate("/");
  };

  return (
    <div className="mx-5 my-5">
      <h1 className="text-center ">
        <b>Login </b>
      </h1>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group ">
          <label htmlFor="exampleInputEmail1">
            <b className="mx-1">Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="form-control my-3"
            onChange={handleChange}
            value={loginForm.email}
          />
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
            value={loginForm.password}
          />
        </div>
        <div className="row my-5">
          <div className="col-4"></div>
          <div className="col-4" style={{ paddingLeft:"8vw"}}>
            <button type="submit" className="btn btn-outline-secondary">
              Login
            </button>
          </div>
          <div className="col-4" style={{marginTop:"12px", paddingLeft:"8vw"}}>
            <Link to={'/auth/signup'}>Don't have account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
