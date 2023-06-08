import React from "react";
import { useState,useEffect } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import axios from "axios";
function UserMenu() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post("http://localhost:3001/verifyuser", {
        token,
      });
      if (response.data === false) {
        navigate("/");
      }
      console.log(response.data);
      setUsername(response.data);
    } catch (error) {
      console.error("Error verifying token:", error);
    }
  };
  useEffect(() => {
    verifyToken();
  }, []);
  const logout = () =>{
    localStorage.clear('token');
    navigate('/')
  }
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
                <div className="dropdown-item">
                  <NavLink to="/">ภาษาไทย</NavLink>
                </div>
                <div className="dropdown-item" >
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
              style={{width : "150px"}}

            >
              <span className="h5 sr-only" >{username}&nbsp;&nbsp;</span>
            </button>
            <div className="dropdown-menu">
              <div className="dropdown-item"  >
                <NavLink  style={{color : "black",textDecoration : "none"}} to="/">ข้อมูลผู้ใช้งาน</NavLink>
              </div>
              <div className="dropdown-item" >
                <NavLink  style={{color : "black",textDecoration : "none"}} to="/">หัวข้อ</NavLink>
              </div>
              <hr className="dropdown-divider"></hr>

              <div className="logout dropdown-item"  onClick={logout}>
               ออกจากระบบ
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
              backgroundColor: "#394867",
            }}
          >
            <div className="position-sticky text-light">
              <h3 className="p-3">IVR Survey</h3>
              <nav className="bd-link w-100">
                <ul className="nav flex-column ">
                  <li className="nav-item">
                    <NavLink
                      className="nav_link fs-4"
                      isActive={(match, location) => {
                        return location.pathname === "/";
                      }}
                      style={({ isActive }) => ({
                        color: isActive ? "orange" : "#fff",
                      })}
                      to="/userdashboard"
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
                    className="h5 text-orange pt-2 pb-0 fs-5"
                    style={{ margin: 0, padding: 0, color: "orange" }}
                  >
                    รายงาน
                  </p>{" "}
                  <div className="ps-2">
                    <NavLink
                      className="nav_link d-flex align-items-center bi bi-archive-fill py-2"
                      style={({ isActive }) => ({
                        color: isActive ? "orange" : "#fff",
                      })}
                      to="/pointreport"
                    >
                      <div>&nbsp;รายงานการให้คะแนน</div>
                    </NavLink>
                    <NavLink
                      className="nav_link  d-flex align-items-center bi bi-archive-fill "
                      style={({ isActive }) => ({
                        color: isActive ? "orange" : "#fff",
                      })}
                      to="/summarizesearchpointpage"
                    >
                      <div>&nbsp;รายงานสรุปการให้คะแนน</div>
                    </NavLink>
                    <NavLink
                      className="nav_link  d-flex align-items-center bi bi-archive-fill py-2"
                      style={({ isActive }) => ({
                        color: isActive ? "orange" : "#fff",
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
