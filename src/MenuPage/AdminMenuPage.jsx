import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function AdminMenuPage() {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  const [isHidden2, setIsHidden2] = useState(true);

  const handleClick2 = () => {
    setIsHidden2(!isHidden2);
  };

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
              <span className="sr-only ">test user</span>
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
                <ul className="nav flex-column p-2">
                  <li className="nav-item">
                    <NavLink
                      className="nav_link fs-5"
                      isActive={(match, location) => {
                        return location.pathname === "/";
                      }}
                      style={({ isActive }) => ({
                        color: isActive ? "#545e6f" : "#fff",
                      })}
                      to="/admindashboard"
                    >
                      แดชบอร์ด
                    </NavLink>
                  </li>
                </ul>
                <div className="line bg-dark w-100"></div>

                <ul
                  className="nav flex-column p-2"
                  style={{ margin: "0px", padding: "0px" }}
                >
                  <p
                    className="fs-5"
                    style={{
                      margin: 0,
                      padding: 0,
                      color: "orange",
                    }}
                  >
                    การจัดการข้อมูล
                  </p>
                  <div
                    className="btn text-start ps-2 pb-0 pt-2 dropdown-toggle text-light nav_link d-flex align-items-center bi bi-archive-fill"
                    style={{ cursor: "pointer", fontSize: "18px" }}
                    onClick={handleClick}
                  >
                    &nbsp;หัวหน้างาน
                  </div>
                  <div
                    className=""
                    style={{ display: isHidden ? "none" : "block" }}
                  >
                    <ul className="ps-3 py-2">
                      <li className="col ">
                        <NavLink
                          className="nav_link "
                          style={({ isActive }) => ({
                            color: isActive ? "#545e6f" : "#fff",
                          })}
                          to="/managerdata"
                        >
                          ข้อมูลหัวหน้างาน
                        </NavLink>
                        
                      </li>
                      <br></br>
                      <li className="col  ">
                        <NavLink
                          className="nav_link "
                          style={({ isActive }) => ({
                            color: isActive ? "#545e6f" : "#fff",
                          })}
                          to="/insertmanagerdata"
                        >
                          นำเข้าข้อมูลหัวหน้างาน
                        </NavLink>
                      </li>
                    </ul>
                    <hr />

                  </div>

                  <div
                    className="btn text-start ps-2 pb-0 pt-0 dropdown-toggle text-light nav_link d-flex align-items-center bi bi-archive-fill"
                    style={{ cursor: "pointer", fontSize: "18px" }}
                    onClick={handleClick2}
                  >
                    &nbsp;พนักงาน
                  </div>
                  <div
                    className=""
                    style={{ display: isHidden2 ? "none" : "block" }}
                  >
                    <ul className="ps-3 py-2">
                      <li className="col">
                        <NavLink
                          className="nav_link"
                          style={({ isActive }) => ({
                            color: isActive ? "#545e6f" : "#fff",
                          })}
                          to="/employeedata"
                        >
                          ข้อมูลพนักงาน
                        </NavLink>
                      </li>
                      <br></br>
                      <li className="col">
                        <NavLink
                          className="nav_link"
                          style={({ isActive }) => ({
                            color: isActive ? "#545e6f" : "#fff",
                          })}
                          to="/insertemployeedata"
                        >
                          นำเข้าข้อมูลพนักงาน
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div style={{ fontSize: "18px" }}>
                    <NavLink
                      className="nav_link col d-flex bi bi-person align-items-center ps-2"
                      style={({ isActive }) => ({
                        color: isActive ? "#545e6f" : "#fff",
                      })}
                      to="/manageuser"
                    >
                      ผู้ใช้งาน
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

export default AdminMenuPage;
