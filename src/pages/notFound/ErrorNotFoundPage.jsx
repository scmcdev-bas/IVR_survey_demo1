import React from "react";
import { NavLink } from "react-router-dom";

function ErrorNotFoundPage() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center row">
        <div className=" col mt-5">
          <p className="fs-3">
            {" "}
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <NavLink
            className="btn btn-primary"
            style={({ isActive }) => ({
              color: isActive ? "#545e6f" : "#fff",
            })}
            to="/"
          >
            Go Home
          </NavLink>
          
        </div>
      </div>
    </div>
  );
}

export default ErrorNotFoundPage;
