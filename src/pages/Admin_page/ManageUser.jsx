import React, { useState } from "react";
import Model from "react-modal";
import "./popup.css";
import axios from "axios";
import { useEffect } from "react";
import en from "./MessageComponent/userEN";
import th from "./MessageComponent/userTH";
function ManageUser() {
  
  const languages = {
    th,
    en,
  };
  const language = localStorage.getItem("language");  
  
  const [username, setusername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [visible, setVisible] = useState(false);

  //for search
  const [searchUsername, setSearchUsername] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchRole, setSearchRole] = useState("");
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);
  const [dataLenth, setDataLenth] = useState("");
  const [fullData, setFullData] = useState([]);
  const [page, setPage] = useState(1);
  const [row, setRow] = useState(10);

  const search = async () => {
    try {
      const response = await axios.post("http://localhost:3001/searchuser", {
        searchUsername,
        searchName,
        searchRole,
      });
      setDataLenth(response.data.length);
      setFullData(response.data);
      setshowdata()
    } catch (error) {
      console.log(error);
    }
  };
  const setshowdata = () => {
    setData(fullData.slice(startIndex, endIndex + 1));
    console.log(data);
    setPage((endIndex + 1) / row);
  };
  const next = () => {
    const value = parseInt(row);
    if (startIndex + value < dataLenth) {
      setStartIndex(startIndex + value);
      setEndIndex(endIndex + value);
    }
  };
  const pre = () => {
    const value = parseInt(row);
    if (startIndex - value >= 0) {
      setStartIndex(startIndex - value);
      setEndIndex(endIndex - value);
    }
  };
  const selectPage = (value) => {
    if (parseInt(value) <= 0 || !Number.isInteger(parseInt(value))) {
      setPage("");
    } else if (parseInt(value) * row > dataLenth) {
      value = Math.ceil(dataLenth/ row) ;
      setStartIndex(parseInt(value) * row - row);
      setEndIndex(parseInt(value) * row - 1);
      setPage((value));
    } else {
      setStartIndex(parseInt(value) * row - row);
      setEndIndex((parseInt(value) * row - 1));
      setPage(value);
    }
  };
  const showDataValue = (value) => {
    setRow(value);
    setStartIndex(0);
    setEndIndex(value - 1);
  };
  useEffect(() => {
    setshowdata();
  }, [fullData]);
  useEffect(() => {
    setshowdata();
  }, [startIndex, endIndex]);
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
              search();
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
        {languages[language].adduser} 
        </div>
        <div className="w-100 p-4">
          <div className="row">
            <div className="col-6">
              <p className="pt-3 ">{languages[language].username}  :</p>
            </div>
            <div className="col-md-6 col-sm-8">
              <p className="pt-3 ">{languages[language].userFullname} </p>
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
              <p className="pt-3 ">{languages[language].password} </p>
            </div>
            <div className="col-6">
              <p className="pt-3 ">{languages[language].Role}</p>
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
                {languages[language].user} 
                </option>
                <option value="admin">{languages[language].admin} </option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-success mt-3" onClick={adduser}>
              {languages[language].addUser} 
              </button>
            </div>
            <div className="col-6 mt-3 d-flex justify-content-end mx-2">
              <button
                className="btn btn-danger px-4"
                onClick={() => setVisible(false)}
              >
                {languages[language].close} 
              </button>
            </div>
          </div>
        </div>
      </Model>

      <div>
        <h3 className="p-2 fw-bold pt-3">{languages[language].userData} </h3>
      </div>
      <div className="card">
        <div className="h5 card-header align-items-center text-white p-2">
        {languages[language].searchCondition} 
        </div>
        <div className=" ">
          <div className="card w-100 py-3">
            <form style={{ width: "95%" }}>
              <div className="row mb-3">
                <div className="col-md-2 col-sm-3 ms-3 mt-3">
                  <p className="pt-1">{languages[language].username} </p>
                  <p className="pt-3">{languages[language].Role} </p>
                </div>
                <div className="col-4 ms-3 mt-3">
                  <div className="col-9">
                    <input
                      type="text"
                      onChange={(e) => setSearchUsername(e.target.value)}
                      className="form-control "
                    ></input>
                    <select
                      className="form-select mt-3"
                      id="floatingSelectGrid"
                      onChange={(e) => setSearchRole(e.target.value)}
                    >
                      <option selected value="">
                      {languages[language].notSelect} 
                      </option>
                      <option value="user">{languages[language].user} </option>
                      <option value="admin">{languages[language].admin} </option>
                    </select>
                  </div>
                  <div onClick={search} className="btn btn-success mt-3 ">
                  {languages[language].search} 
                  </div>
                </div>
                <div className="col-md-2 col-sm-3 ms-3 mt-3">
                {languages[language].userFullname}                 </div>
                <div className="col-3 mt-3">
                  <input
                    onChange={(e) => setSearchName(e.target.value)}
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
                    {languages[language].insertUser} 
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="card mt-5 mb-5">
        <div className="h5 card-header align-items-center text-white p-2">
        {languages[language].serarchResult} 

        </div>
        <select
                  onChange={(e) => showDataValue(e.target.value)}
                  className="form-select ms-5 mt-5"
                  style={{ width: "100px" }}
                >
                  <option value="10" selected>
                    10{" "}
                  </option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
        <div className=" ">
          <div className="d-flex justify-content-center px-5  pt-2">
            <table className="table table-hover shadow-sm p-3 mb-5 bg-body-tertiary rounded ">
              <thead className="table-header align-middle">
                <tr>
                  <th scope="col" style={{width : "10%"}}>{languages[language].dataNo} </th>
                  <th scope="col"style={{width : "20%"}}>{languages[language].dataDate} </th>
                  <th scope="col"style={{width : "20%"}}>{languages[language].dataUsername} </th>
                  <th scope="col"style={{width : "30%"}}>{languages[language].dataFullname} </th>
                  <th scope="col"style={{width : "20%"}}>{languages[language].dataRole} </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.USERNAME}>
                    <th scope="row">{index + startIndex + 1}</th>
                    <td>{item.INSERT_DATE}</td>
                    <td>{item.USERNAME}</td>
                    <td>{item.FULLNAME}</td>
                    <td>{item.ROLE}</td>
                  </tr>
                ))}
                <tr>
                  <th colSpan="2" className="align-middle">{languages[language].totalData}  {dataLenth} {languages[language].record} </th>
                  <th colSpan="2" className="align-middle">
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          className="m-0 p-0"
                        >
                          <span> {languages[language].page}</span>
                          <input
                            onChange={(e) =>
                              selectPage(parseInt(e.target.value))
                            }
                            type="text"
                            className="form-control mx-2"
                            id="pagenumber"
                            value={page}
                            style={{
                              width: "60px",
                              height: "30px",
                              textAlign: "center",
                            }}
                            disabled={Math.ceil(dataLenth / row) <= "1"}

                          />
                          <span>
                            {languages[language].of}{" "}
                            {Math.ceil(dataLenth / row)}{" "}
                            {languages[language].page}
                          </span>
                        </div>
                      </th>
                  <th colSpan="1">
                    <div className="text-end me-5">
                      <div className="btn btn-primary px-3 mx-1" onClick={pre}>
                        Pre
                      </div>
                      <div className="btn btn-primary " onClick={next}>
                        Next
                      </div>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
