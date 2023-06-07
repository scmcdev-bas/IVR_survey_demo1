import React, { useState } from "react";
import Model from "react-modal";
import "./popup.css";
import axios from "axios";
function ManageUser() {
  const [username, setusername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [visible, setVisible] = useState(false);

  const adduser = () => {
    if (username === "" || name === "" || password === "") {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else {
      const userData = {
        username: username,
        name: name,
        password: password,
        userType: userType,
      };

      console.log(userData);
      try {
        const response = axios.post("http://localhost:3001/adduser", {
          userData,
        });
        response
          .then((data) => {
            alert(data.data.message);
            if (data.data.success === true) {
              const inputElement_username = document.getElementById(
                "insert_data_username"
              );
              inputElement_username.value = "";
              const inputElement_password = document.getElementById(
                "insert_data_password"
              );
              inputElement_password.value = "";
              const inputElement_name =
                document.getElementById("insert_data_name");
              inputElement_name.value = "";
              setusername("");
              setPassword("");
              setName("");
              setVisible(false);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    }
  };
  return (
    <div
      style={{ paddingLeft: "270px", paddingRight: "10px", minWidth: "1200px" }}
    >
      <Model
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={{
          content: {
            width: "700px",
            height: "400px",
            margin: "auto",
            padding: 0,
          },
        }}
      >
        <div className="card-header align-items-center text-white">
          เพิ่มผู้ใช้งาน
        </div>
        <div className="w-100 p-4">
          <div className="row">
            <div className="col-6">
              <p className="pt-3 ">ชื่อผู้ใช้ :</p>
            </div>
            <div className="col-md-6 col-sm-8">
              <p className="pt-3 ">ชื่อ-นามสกุล :</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <input
                onChange={(e) => setusername(e.target.value)}
                type="text"
                className="form-control"
                id="insert_data_username"
                placeholder=""
                style={{ width: "300px" }}
              ></input>{" "}
            </div>
            <div className="col-6">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="insert_data_name"
                placeholder=""
                style={{ width: "300px" }}
              ></input>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="pt-3 ">รหัสผ่าน :</p>
            </div>
            <div className="col-6">
              <p className="pt-3 ">บทบาท :</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="form-control"
                placeholder=""
                style={{ width: "300px" }}
                id="insert_data_password"
              ></input>{" "}
            </div>
            <div className="col-5">
              <select
                className="form-select "
                id="floatingSelectGrid"
                onChange={(e) => setUserType(e.target.value)}
              >
                <option selected value="user">
                  user
                </option>
                <option value="admin">admin</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-success mt-3" onClick={adduser}>
                เพิ่มข้อมูล
              </button>
            </div>
            <div className="col-6 mt-3 d-flex justify-content-end mx-2">
              <button
                className="btn btn-danger"
                onClick={() => setVisible(false)}
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      </Model>
      <div className="alert alert-secondary w-50 p-2 mt-3" role="alert">
        this is path
      </div>
      <div>
        <h3 className="p-2">ข้อมูลผู้ใช้งาน</h3>
      </div>
      <div className="card">
        <div className="h5 card-header align-items-center text-white p-2">
          เงื่อนไขการค้นหา
        </div>
        <div className=" ">
          <div className="card w-100 py-3">
            <form style={{ width: "95%" }}>
              <div className="row mb-3">
                <div className="col-md-2 col-sm-3 ms-3 mt-3">
                  <p className="pt-1">ชื่อผู้ใช้ :</p>
                  <p className="pt-2">บทบาท :</p>
                </div>
                <div className="col-4 ms-3 mt-3">
                  <div className="col-9">
                    <input type="text" className="form-control "></input>
                    <select
                      className="form-select mt-3"
                      id="floatingSelectGrid"
                      onChange={(e) => setUserType(e.target.value)}
                    >
                      <option selected value="user">
                        user
                      </option>
                      <option value="admin">admin</option>
                    </select>
                  </div>
                  <div className="btn btn-success mt-3 ">ค้นหาข้อมูล</div>
                </div>
                <div className="col-md-2 col-sm-3 ms-3 mt-3">
                  ชื่อ-นามสุกล :{" "}
                </div>
                <div className="col-3 mt-3">
                  <input
                    type="text"
                    className="form-control "
                    id="floatingInput"
                  ></input>
                </div>
                <div className="col-md-11 col-sm-4 d-flex justify-content-end align-items-end ">
                  <div
                    className="btn btn-primary mx-3 me-4"
                    style={{ width: "200px" }}
                    onClick={() => setVisible(true)}
                  >
                    เพิ่มผู้ใช้งาน
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="card mt-5">
        <div className="h5 card-header align-items-center text-white p-2">
          ผลการค้นหา
        </div>
        <div className=" ">
          <div className="card w-100 ">
            <form style={{ width: "95%" }}>
              <div className="d-flex justify-content-center px-5 pt-3">
                <table className="table table-hover shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                  <thead>
                    <tr>
                      <th scope="col">ลำดับ</th>
                      <th scope="col">รหัสเจ้าหน้าที่</th>
                      <th scope="col">ชื่อหัวเจ้าหน้าที่</th>
                      <th scope="col">รหัสหน่วยงาน</th>
                      <th scope="col">ชื่อหน่วยงาน</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>data1</td>
                      <td>data1</td>
                      <td>data1</td>
                      <td>data1</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>data1</td>
                      <td>data1</td>
                      <td>data1</td>
                      <td>data1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
