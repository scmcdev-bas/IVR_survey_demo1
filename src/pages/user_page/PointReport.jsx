import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import th from "./MessageComponent/PointReportTH";
import en from "./MessageComponent/PointReportEN";
function PointReport() {
  const currentdate = new Date().toISOString().substring(0, 10);
  const [startDate, setStartDate] = useState(currentdate);
  const [endDate, setEndDate] = useState(currentdate);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [reportType, setReportType] = useState("");
  const [reportTopic, setReportTopic] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [agent, setAgent] = useState("");
  const [cusTel,setCusTel] = useState("");
  const [value1, setValue1] = useState("1");
  const [value2, setValue2] = useState("2");
  const [value3, setValue3] = useState("3");
  const [value4, setValue4] = useState("4");
  const [value5, setValue5] = useState("5");
  const [noData, setNoData] = useState("98");

  //use for display data
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);
  const [dataLenth, setDataLenth] = useState("");
  const [fullData, setFullData] = useState([]);
  const [page, setPage] = useState(1);
  const [row, setRow] = useState(10);

  //usefor change language
  const languages = {
    th,
    en,
  };
  const language = localStorage.getItem("language");

  //take data
  const getdata = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/getpointreport",
        {
          startDate,
          endDate,
          value1,
          value2,
          value3,
          value4,
          value5,
          noData,
          reportTopic,
          cusTel
        }
      );
      setDataLenth(response.data.length);
      setData(response.data.slice(startIndex, endIndex + 1));
      setFullData(response.data);
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
      value = Math.ceil(dataLenth / row);
      setStartIndex(parseInt(value) * row - row);
      setEndIndex(parseInt(value) * row - 1);
      setPage(value);
    } else {
      setStartIndex(parseInt(value) * row - row);
      setEndIndex(parseInt(value) * row - 1);
      setPage(value);
    }
  };
  const showDataValue = (value) => {
    setRow(value);
    setStartIndex(0);
    setEndIndex(value - 1);
  };
  const addValue1 = () => {
    setValue1(value1 === "" ? "1" : "");
  };
  const addValue2 = () => {
    setValue2(value2 === "" ? "2" : "");
  };
  const addValue3 = () => {
    setValue3(value3 === "" ? "3" : "");
  };
  const addValue4 = () => {
    setValue4(value4 === "" ? "4" : "");
  };
  const addValue5 = () => {
    setValue5(value5 === "" ? "5" : "");
  };
  const addValueNoData = () => {
    setNoData(noData === "" ? "98" : "");
  };
  useEffect(() => {
    setshowdata();
  }, [fullData]);
  useEffect(() => {
    setshowdata();
  }, [startIndex, endIndex]);

  return (
    <div>
      <div
        style={{
          paddingLeft: "270px",
          paddingRight: "10px",
          minWidth: "1200px",
        }}
      >
        <div>
          <h3 className="p-2 fw-bold pt-3">
            {languages[language].ratingsReport}
          </h3>
        </div>
        <div className="card mb-3">
          <div className="h5 card-header align-items-center text-white p-2">
            {languages[language].searchConditions}
          </div>
          <div className="">
            <div className="" style={{ width: "90%" }}>
              <form>
                <div className="row align-items-center p-2 mt-3 ">
                  <div className="col-2 px-5">
                    <div> {languages[language].dateandTime}</div>
                  </div>
                  <div className="col-5">{languages[language].startDate}</div>
                  <div className="col-3">{languages[language].endDate}</div>
                </div>
                <div className="row align-items-center p-2">
                  <div className="col-2 "></div>
                  <div className="col-2">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="YYYY/MM/DD"
                      onChange={(e) => setStartDate(e.target.value)}
                    ></input>{" "}
                  </div>
                  <div className="col-2 d-flex">
                    <input
                      type="text"
                      className="form-control text-center"
                      placeholder="00"
                      style={{ maxWidth: "50px" }}
                    ></input>{" "}
                    <h3 className="px-1"> : </h3>
                    <input
                      type="text"
                      className="form-control text-center"
                      placeholder="00"
                      style={{ maxWidth: "50px" }}
                    ></input>{" "}
                  </div>
                  <div className="col-1"></div>
                  <div className="col-2">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="YYYY/MM/DD"
                      onChange={(e) => setEndDate(e.target.value)}
                    ></input>{" "}
                  </div>
                  <div className="col-2 d-flex">
                    <input
                      type="text"
                      className="form-control text-center"
                      placeholder="23"
                      style={{ maxWidth: "50px" }}
                    ></input>{" "}
                    <h3 className="px-1"> : </h3>
                    <input
                      type="text"
                      className="form-control text-center"
                      placeholder="59"
                      style={{ maxWidth: "50px" }}
                    ></input>{" "}
                  </div>
                  <div className="row p-2 mt-3">
                    <div className="col-2 px-5 pt-1 ">
                      {" "}
                      {languages[language].reportType}
                    </div>
                    <div className="col-2 ms-2">
                      <select className="form-select" id="floatingSelectGrid">
                        <option value="" selected>
                          Open this select menu
                        </option>
                      </select>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-2 px-5 pt-1 ">
                      {" "}
                      {languages[language].assessmentTopics}
                    </div>
                    <div className="col-2 ms-1">
                      <select
                        className="form-select"
                        id="floatingSelectGrid"
                        onChange={(e) => {
                          setReportTopic(e.target.value);
                        }}
                      >
                        <option value=""selected>{languages[language].noSelect}</option>
                        <option value="1115">1115</option>
                        <option value="CreditCard">CreditCard</option>
                        <option value="ATM">ATM</option>
                      </select>
                    </div>
                  </div>
                  <div className="row p-2 z">
                    <div className="col-2 px-5 pt-1 ">
                      {" "}
                      {languages[language].supervisor}
                    </div>
                    <div className="col-2 ms-2">
                      <select className="form-select" id="floatingSelectGrid">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-1"></div>

                    <div className="col-2 px-5 pt-1 ">
                      {" "}
                      {languages[language].agent}
                    </div>
                    <div className="col-2 ms-1">
                      <select className="form-select" id="floatingSelectGrid">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-2 px-5 pt-1 ">
                      {" "}
                      {languages[language].custumertel}
                    </div>
                    <div className="col-2 ms-2">
                      <input
                      onChange={(e) => {setCusTel(e.target.value)}}
                        type="text"
                        className="form-control"
                        placeholder="090-000-0000"
                      ></input>{" "}
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-2 px-5 pt-1 ">
                      {" "}
                      {languages[language].rating}
                    </div>
                    <div className="col-5 ms-2 d-flex mt-2">
                      <div className="me-3 ms-1">
                        <input
                          defaultChecked
                          type="checkbox"
                          onChange={addValue1}
                          id="checkbox1"
                          name="customRadioInline1"
                          className="me-1"
                        ></input>
                        <label className="" htmlFor="">
                          1{" "}
                        </label>
                      </div>
                      <div className="me-3">
                        <input
                          defaultChecked
                          onChange={addValue2}
                          type="checkbox"
                          id="checkbox1"
                          name="customRadioInline1"
                          className="me-1"
                        ></input>
                        <label className="" htmlFor="">
                          2{" "}
                        </label>
                      </div>
                      <div className="me-3">
                        <input
                          defaultChecked
                          onChange={addValue3}
                          type="checkbox"
                          id="checkbox1"
                          name="customRadioInline1"
                          className="me-1"
                        ></input>
                        <label className="" htmlFor="">
                          3{" "}
                        </label>
                      </div>
                      <div className="me-3">
                        <input
                          defaultChecked
                          onChange={addValue4}
                          type="checkbox"
                          id="checkbox1"
                          name="customRadioInline1"
                          className="me-1"
                        ></input>
                        <label className="" htmlFor="">
                          4{" "}
                        </label>
                      </div>
                      <div className="me-3">
                        <input
                          defaultChecked
                          onChange={addValue5}
                          type="checkbox"
                          id="checkbox1"
                          name="customRadioInline1"
                          className="me-1"
                        ></input>
                        <label className="" htmlFor="">
                          5{" "}
                        </label>
                      </div>
                      <div className="me-3">
                        <input
                          defaultChecked
                          onChange={addValueNoData}
                          type="checkbox"
                          id="checkbox1"
                          name="customRadioInline1"
                          className="me-1"
                        ></input>
                        <label className="" htmlFor="">
                          NO INPUT{" "}
                        </label>
                      </div>
                      <div className="me-3">
                        <input
                          type="checkbox"
                          id="checkbox1"
                          name="customRadioInline1"
                          className="me-1"
                        ></input>
                        <label className="" htmlFor="">
                          NO MATCH{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5 mb-3">
                    <div className="col-2"></div>
                    <div className="col-2">
                      <div
                        onClick={getdata}
                        style={{ width: "100px" }}
                        className="btn btn-success  "
                      >
                        {languages[language].search}
                      </div>
                    </div>
                    <div className="col justify-content-start">
                      <button
                        style={{ width: "100px" }}
                        className="btn btn-warning  "
                      >
                        {languages[language].reset}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>{" "}
        <div className="pb-3">
          <div className="btn btn-success ">
            <dir className="d-flex p-0 m-0 justify-content-center align-items-center">
              <i className="bi bi-download"></i>
              <div className="ps-2"> {languages[language].download}</div>
            </dir>
          </div>
        </div>
        <div className="card mb-4">
          <div className="h5 card-header align-items-center text-white p-2">
            {languages[language].searchResult}
          </div>
          <div className=" ">
            <select
              onChange={(e) => showDataValue(e.target.value)}
              className="form-select ms-5 mt-4"
              style={{ width: "100px" }}
            >
              <option value="10" selected>
                10{" "}
              </option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <div className="d-flex justify-content-center">
              <div className="row p-2 mt-2 " style={{ width: "100%" }}>
                <div>
                  <div className="px-4">
                    <table className="table table-hover shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                      <thead>
                        <tr className="table-header align-middle">
                          <th scope="col" style={{ width: "5%" }}>
                            {languages[language].no}
                          </th>
                          <th scope="col" style={{ width: "10%" }}>
                            {languages[language].date}
                          </th>
                          <th scope="col" style={{ width: "8%" }}>
                            {languages[language].time}{" "}
                          </th>
                          <th scope="col" style={{ width: "9%" }}>
                            {languages[language].agentNo}
                          </th>
                          <th scope="col" style={{ width: "16%" }}>
                            {languages[language].agentName}{" "}
                          </th>

                          <th scope="col" style={{ width: "5%" }}>
                            {languages[language].point}{" "}
                          </th>
                          <th scope="col" style={{ width: "5%" }}>
                            {languages[language].topic}{" "}
                          </th>
                          <th scope="col" style={{ width: "10%" }}>
                            {languages[language].supervisurName}{" "}
                          </th>

                          <th scope="col" style={{ width: "10%" }}>
                            {languages[language].divisionName}{" "}
                          </th>

                          <th scope="col" style={{ width: "10%" }}>
                            {languages[language].cusTel}{" "}
                          </th>

                          <th scope="col" style={{ width: "10%" }}>
                            {languages[language].place}{" "}
                          </th>
                          <th scope="col" style={{ width: "5%" }}>
                            {languages[language].rountPoint}{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ textAlign: "center" }}>
                        {data.map((item, index) => (
                          <tr key={item.USERNAME}>
                            <th scope="row">{index + startIndex + 1}</th>
                            <td style={{ textAlign: "left" }}>{item.Date}</td>
                            <td style={{ textAlign: "left" }}>{item.Time}</td>
                            <td style={{ textAlign: "left" }}>
                              {item.AGENT_ID}
                            </td>
                            <td style={{ textAlign: "left" }}>
                              {item.AGENT_NAME}
                            </td>
                            <td style={{ textAlign: "left" }}>
                              {item.SURVEY_TOPIC}
                            </td>
                            <td> {item.SCORE}</td>
                            <td></td>
                            <td></td>

                            <td style={{ textAlign: "left" }}>{item.MSISDN}</td>
                            <td style={{ textAlign: "left" }}>{item.PLACE}</td>
                            <td style={{ textAlign: "left" }}>
                              {item.ROUTE_POINT}
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <th colSpan="3" className="align-middle ">
                            {languages[language].totaldata}
                            {dataLenth} {languages[language].record}
                          </th>
                          <th colSpan="4" className="align-middle ps-5">
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
                          <th colSpan="4">
                            <div className="text-end me-5">
                              <div
                                className="btn btn-primary px-3 mx-1"
                                onClick={pre}
                              >
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
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default PointReport;
