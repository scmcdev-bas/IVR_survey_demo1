import axios from "axios";
import React, { useEffect, useState } from "react";
import en from "./MessageComponent/EmployeeDataEN";
import th from "./MessageComponent/EmployeeDataTH";
function EmployeeData() {
  const languages = {
    th,
    en,
  };
  const language = localStorage.getItem("language");
  const [dataLenth, setDataLenth] = useState("");
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);
  const [fullData,setFullData] = useState([])
  const download = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/dowloadagentxlsxfile",
        { responseType: "blob" }
      );
      const link = document.createElement("a");
      link.href = URL.createObjectURL(new Blob([response.data]));
      link.setAttribute("download", "AGENT.xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchDataSQL("");
  }, []);
  const searchDataSQL = async (search) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/searchagentdata",
        {
          search,
        }
      );
      setData(response.data);
      setDataLenth(response.data.length);
      setFullData(response.data);
      setshowdata()
    } catch (error) {
      console.log(error);
    }
  };
  const setshowdata = () =>{
    setData(fullData.slice(startIndex, endIndex + 1));
    console.log(data)
  }
  const next = () => {
    if (endIndex+10 <= dataLenth) {
      setStartIndex(startIndex + 10);
      setEndIndex(endIndex + 10);
    }
  };
  const pre = () => {
    if (startIndex - 10 >= 0) {
      setStartIndex(startIndex - 10);
      setEndIndex(endIndex - 10);
    }
  };
  useEffect(() => {
    setshowdata();
  }, [fullData]);
  useEffect(() => {
    setshowdata();
  }, [startIndex, endIndex]);
  return (
    <>
      <div
        style={{
          paddingLeft: "270px",
          paddingRight: "10px",
          minWidth: "1200px",
        }}
      >
        <div className="alert alert-secondary w-50 p-2 mt-3" role="alert">
          พนักงาน / ข้อมูลพนักงาน
        </div>
        <div>
          <h3 className="p-2">{languages[language].agentData}</h3>
        </div>
        <div className="card">
          <div className="h5  card-header align-items-center text-white p-2">
            {languages[language].search_results}
          </div>
          <div className=" ">
            <div className="card w-100 ">
              <form>
                <div className="d-flex justify-content-end">
                  <div className="btn btn-success m-3 mb-0 d-flex align-items-center">
                    <dir className="d-flex p-0 m-0 justify-content-center align-items-center">
                      <i className="bi bi-download"></i>
                      <div onClick={download} className="ps-2">
                        {" "}
                        {languages[language].download}
                      </div>
                    </dir>
                  </div>
                </div>
                <div className="d-flex justify-content-center pt-4">
                  <input
                    onChange={(e) => searchDataSQL(e.target.value)}
                    type="text"
                    className="form-control m-3"
                    id="floatingInput"
                    placeholder={languages[language].search}
                    style={{ width: "300px" }}
                  ></input>
                </div>

                <div className="d-flex justify-content-center p-5">
                  <table className="table table-hover shadow-sm p-3 mb-5 bg-body-tertiary rounded ">
                    <thead>
                      <tr className="table-header">
                        <th scope="col" style={{ width: "10%" }}>
                          {" "}
                          {languages[language].no}
                        </th>
                        <th scope="col" style={{ width: "20%" }}>
                          {" "}
                          {languages[language].agentID}
                        </th>
                        <th scope="col" style={{ width: "30%" }}>
                          {" "}
                          {languages[language].agentName}
                        </th>
                        <th scope="col" style={{ width: "20%" }}>
                          {" "}
                          {languages[language].agentCode}
                        </th>
                        <th scope="col" style={{ width: "20%" }}>
                          {" "}
                          {languages[language].agencyName}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={item.AGENT_ID}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.AGENT_ID}</td>
                          <td>{item.AGENT_NAME}</td>
                          <td>{item.SUPERVISOR_ID}</td>
                          <td>{item.SUPERVISOR_NAME}</td>
                        </tr>
                      ))}
                      <th colSpan="2" className="align-middle">
                        {languages[language].totalData} {dataLenth} {languages[language].record}
                      </th>
                      
                      <th colSpan="2">
                        <div className="text-end me-5">
                          <div className="btn btn-primary px-3 mx-1" onClick={pre}>Pre</div>
                          <div className="btn btn-primary" onClick={next}>Next</div>
                        </div>
                      </th>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeData;
