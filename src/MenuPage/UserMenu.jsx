import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function UserMenu() {
  return (
    <div>
      <div
        className="d-flex justify-content-around  container-fluid p-1 align-items-center"
        style={{
          fontSize: "16px",
          boxShadow: "inset -1px 0 0 rgba(0.5,0.5,0.5.0.5)",
          zIndex: 200,
          backgroundColor: "white",
        }}
      >
        <div className="d-flex justify-content-end w-100 bg align-items-center">
          <div className="d-flex justify-content-end w-100 bg align-items-center mr-3 px-4">
            <div className="btn-group">
              <button
                type="button"
                style={{ background: "white", border: "none" }}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <span className="sr-only ">ภาษา</span>
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-item" href="#">
                  <NavLink to="/">ภาษาไทย</NavLink>
                </div>
                <div className="dropdown-item" href="#">
                  <NavLink to="/test">English</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle dropdown-toggle-split "
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="sr-only">test user</span>
            </button>
            <div className="dropdown-menu">
              <div className="dropdown-item" href="#">
                <NavLink to="/">ข้อมูลผู้ใช้งาน</NavLink>
              </div>
              <div className="dropdown-item" href="#">
                <NavLink to="/test">ออกจากระบบ</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row">
          <nav
            id="sidebar"
            className="col-md-3 col-lg-2 d-md-block sidebar collpase"
            style={{
              width: "250px",
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              zIndex: 100,
              backgroundColor: "#212A3E",
            }}
          >
            <div className="position-sticky text-light">
              <h3 className="p-3">IVR Survey</h3>
              <nav className="bd-link w-100">
                <ul className="nav flex-column ">
                  <li className="nav-item">
                    <NavLink
                      className="nav_link fs-5  "
                      isActive={(match, location) => {
                        return location.pathname === "/";
                      }}
                      style={({ isActive }) => ({
                        color: isActive ? "#545e6f" : "#fff",
                      })}
                      to="/dashboard"
                    >
                      แดชบอร์ด
                    </NavLink>
                  </li>
                </ul>
                <div className="line bg-dark w-100"></div>

                <ul
                  className="nav flex-column "
                  style={{ margin: "0px", padding: "0px" }}
                >
                  <p
                    className="text-orange pt-2 pb-0 fs-5"
                    style={{ margin: 0, padding: 0, color: "orange" }}
                  >
                    รายงาน
                  </p>{" "}
                  <div className="ps-2">
                    <NavLink
                      className="nav_link  d-flex align-items-center bi bi-archive-fill py-2"
                      style={({ isActive }) => ({
                        color: isActive ? "#545e6f" : "#fff",
                      })}
                      to="/pointreport"
                    >
                      <div>&nbsp;รายงานการให้คะแนน</div>
                    </NavLink>
                    <NavLink
                      className="nav_link  d-flex align-items-center bi bi-archive-fill "
                      style={({ isActive }) => ({
                        color: isActive ? "#545e6f" : "#fff",
                      })}
                      to="/summarizesearchpointpage"
                    >
                      <div>&nbsp;รายงานสรุปการให้คะแนน</div>
                    </NavLink>
                    <NavLink
                      className="nav_link  d-flex align-items-center bi bi-archive-fill py-2"
                      style={({ isActive }) => ({
                        color: isActive ? "#545e6f" : "#fff",
                      })}
                      to="/searchpointpage"
                    >
                      <div>&nbsp;รายงานกราฟข้อมูล</div>
                    </NavLink>
                  </div>
                </ul>
              </nav>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
