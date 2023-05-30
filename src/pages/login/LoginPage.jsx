import React from "react";
import { NavLink } from "react-router-dom";
function LoginPage() {
  return (
    <div className="vh-100" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-left">
                <h1 className="">User Login</h1>

                <div className="form-outline mb-4 pt-3">
                  <p className="text-start">Username :</p>
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    placeholder="Username"
                  />
                </div>
                <p className="text-start">Password :</p>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg "
                    placeholder="Password"
                  />
                </div>

                <hr className="my-4"></hr>
                <div className="d-flex justify-content-center">
                  {" "}
                  <NavLink
                    className="btn btn-secondary btn-lg btn-block w-50 shadow bg-body-tertiary rounded-pill  "
                    style={({ isActive }) => ({
                      color: isActive ? "#545e6f" : "#fff",
                      textDecoration: "none",
                    })}
                    to="/insertemployeedata"
                  >
                    login
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
