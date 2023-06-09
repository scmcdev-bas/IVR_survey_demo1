import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import en from "./MessageComponent/AdminMenuEN";
import th from "./MessageComponent/AdminMenuTH";
import axios from "axios";
function AdminMenuPage() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "th"
  );
  const [languages, setLanguages] = useState({
    th,
    en,
  });
  const handleThai = () => {
    const newLanguage = "th";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    window.location.reload();
  };
  const handleENG = () => {
    const newLanguage = "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    window.location.reload();
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    console.log(storedLanguage);
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);
  const [isHidden2, setIsHidden2] = useState(true);
  const [username, setUsername] = useState("");

  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post("http://localhost:3001/verifyadmin", {
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

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  const handleClick2 = () => {
    setIsHidden2(!isHidden2);
  };

  const logout = () => {
    localStorage.clear("token");
    navigate("/");
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
                <span className="sr-only ">
                  {" "}
                  {languages[language].language}
                </span>
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={handleThai}>ภาษาไทย</div>
                <div className="dropdown-item" onClick={handleENG}>English</div>
              </div>
            </div>
          </div>
          <div className="btn-group ">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle dropdown-toggle-split "
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ width: "150px" }}
            >
              <span className="h5 sr-only ">{username}&nbsp;&nbsp;</span>
            </button>
            <div className="dropdown-menu">
              <div className="dropdown-item"></div>
              <div className="logout dropdown-item" onClick={logout}>
                {languages[language].signOut}
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
                <ul className="nav flex-column p-2">
                  <li className="nav-item">
                    <NavLink
                      className="nav_link fs-4 justify-content-center"
                      isActive={(match, location) => {
                        return location.pathname === "/";
                      }}
                      style={({ isActive }) => ({
                        color: isActive ? "orange" : "#fff",
                      })}
                      to="/admindashboard"
                    >
                      {languages[language].dashboard}
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
                    {languages[language].dataManagement}
                  </p>
                  <div
                    className="btn text-start ps-2 pb-0 pt-2 dropdown-toggle text-light nav_link d-flex align-items-center bi bi-archive-fill"
                    style={{ cursor: "pointer", fontSize: "18px" }}
                    onClick={handleClick}
                  >
                    &nbsp; {languages[language].supersisor}
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
                            color: isActive ? "orange" : "#fff",
                          })}
                          to="/managerdata"
                        >
                          {languages[language].supersisorData}
                        </NavLink>
                      </li>
                      <br></br>
                      <li className="col  ">
                        <NavLink
                          className="nav_link "
                          style={({ isActive }) => ({
                            color: isActive ? "orange" : "#fff",
                          })}
                          to="/insertmanagerdata"
                        >
                          {languages[language].importSupersisorData}
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
                    &nbsp; {languages[language].agent}
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
                            color: isActive ? "orange" : "#fff",
                          })}
                          to="/employeedata"
                        >
                          {languages[language].agentData}
                        </NavLink>
                      </li>
                      <br></br>
                      <li className="col">
                        <NavLink
                          className="nav_link"
                          style={({ isActive }) => ({
                            color: isActive ? "orange" : "#fff",
                          })}
                          to="/insertemployeedata"
                        >
                          {languages[language].importAgentData}
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div style={{ fontSize: "18px" }}>
                    <NavLink
                      className="nav_link col d-flex bi bi-person align-items-center ps-2"
                      style={({ isActive }) => ({
                        color: isActive ? "orange" : "#fff",
                      })}
                      to="/manageuser"
                    >
                      {languages[language].user}
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
