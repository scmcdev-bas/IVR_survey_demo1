import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleUsername = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      const usertype = response.data.response.data;
      console.log(usertype);
      if (usertype === "admin") {
        navigate("/admindashboard");
      } else if (usertype === "user") {
        navigate("/userdashboard");
      }
      localStorage.setItem('token', response.data.response.token);
      console.log(response.data.response.token)
    } catch (error) {
      setErrorMessage(error.response.data.error);
      setIsVisible(true);
    }
  };
  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post("http://localhost:3001/verifylogin", {
        token,
      });
      if (response.data === 'admin') {
        navigate("/admindashboard");
      }else if (response.data === 'user') {
        navigate("/userdashboard");
      }
    } catch (error) {
      console.error("Error verifying token:", error);
    }
  };
  useEffect(() => {
    verifyToken();
  }, []);
  return (
    <div className="vh-100">
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
                  <p className="text-start">ชื่อผู้ใช้งาน :</p>
                  <input
                    onChange={handleUsername}
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    placeholder="Username"
                  />
                </div>
                <p className="text-start">รหัสผ่าน :</p>
                <div className="form-outline mb-4">
                  <input
                    onChange={handlePassword}
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg "
                    placeholder="Password"
                  />
                </div>
                {isVisible ? <div className="alert alert-danger py-1 my-0 mx-3 ">{errorMessage}</div> : null}
                <hr className="my-4"></hr>
                <div className="d-flex justify-content-center">
                  {" "}
                  <div
                    className="btn btn-secondary btn-lg btn-block w-50 shadow bg-body-tertiary rounded-pill  "
                    onClick={login}
                  >
                    login
                  </div>
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
