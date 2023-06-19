import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import en from "./MessageComponent/ImportEN";
import th from "./MessageComponent/ImportTH";
function InsertEmployeeData() {
  const languages = {
    th,
    en,
  };
  const language = localStorage.getItem("language");  
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("กรุณาเลือกไฟล์ที่ต้องการอัปโหลด");
      return;
    }
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('http://localhost:3001/insertagent', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data);

    } catch (error) {
      console.error(error);
      alert('Error uploading file.');
    }
  };
  return (
    <div
      style={{ paddingLeft: "270px", paddingRight: "10px", minWidth: "1200px" }}
    >

      <div>
        <h3 className="p-2 fw-bold pt-3">{languages[language].importAgent} </h3>
      </div>
      <div className="card">
        <div className="h5  card-header align-items-center text-white p-2">
        {languages[language].importData} 
        </div>
        <div className="">
          <div className="card w-100 py-4">
            <form>
              <div className="row mb-3" style={{ width: "95%" }}>
                <div className="col-2 ms-3 mt-3">
                  <p>{languages[language].dataType}</p>
                  <br />
                  <p>{languages[language].chooseFile}</p>
                </div>
                <div className="col-5 ms-3 mt-3">
                  <div className="col-6 ">
                    <select className="form-select" id="floatingSelectGrid">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-9">
                    <input
                      onChange={handleFileChange}
                      type="file"
                      className="form-control mt-3"
                    ></input>
                  </div>
                  <div className="btn btn-success mt-3">
                    <dir className="d-flex p-0 m-0 justify-content-center align-items-center">
                      <i className="bi bi-upload"></i>
                      <div onClick={handleSubmit} className="ps-2">
                      {languages[language].importData} 
                      </div>
                    </dir>
                  </div>
                </div>
                <div className="col-2 ms-3 mt-3">
                  <p>{languages[language].dataExample}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsertEmployeeData;
