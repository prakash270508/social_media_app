import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  document.title = "Page not found";
  return (
    <div className="text-center">
      <h1>Page not Found </h1>
      <Link to={"/"}>
        <button className="btn btn-secondary">&larr; Go to Home</button>
      </Link>
    </div>
  );
}
