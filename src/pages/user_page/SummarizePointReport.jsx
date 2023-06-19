import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import th from "./MessageComponent/SummarizePointReportTH";
import en from "./MessageComponent/SummarizePointReportEN";
function SummarizePointReport() {
  const currentdate = new Date().toISOString().substring(0, 10);
  const [startDate, setStartDate] = useState(currentdate);
  const [endDate, setEndDate] = useState(currentdate);
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);
  const [dataLenth, setDataLenth] = useState("");
  const [fullData, setFullData] = useState([]);
  const [page, setPage] = useState(1);
  const [row, setRow] = useState(10);
  const languages = {
    th,
    en,
  };
  const language = localStorage.getItem("language");  
  const getdata = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/getpointreport",
        {
          startDate,
          endDate,
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
          <h3 className="p-2 fw-bold pt-3">{languages[language].ratingsReport}</h3>
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
                  <div className="row p-2 mt-3">
                    <div className="col-2 px-5 pt-1 ">
                      {" "}
                      {languages[language].reportType}
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
                      {languages[language].assessmentTopics}
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
                          type="checkbox"
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
                          <th scope="col" style={{ width: "16%" }}>
                            {languages[language].name}
                          </th>
                          <th scope="col" style={{ width: "10%" }}>
                            {languages[language].Individual}{" "}
                          </th>
                          <th scope="col" style={{ width: "10%" }}>
                            {languages[language].comparison}
                          </th>
                          <th scope="col" style={{ width: "5%" }}>
                            {languages[language].totalCall}{" "}
                          </th>
                          <th scope="col" style={{ width: "2%" }}>
                            %
                          </th>
                          <th scope="col" style={{ width: "5%" }}>
                            {languages[language].rate5}{" "}
                          </th>
                          <th scope="col" style={{ width: "2%" }}>
                            %
                          </th>
                          <th scope="col" style={{ width: "5%" }}>
                            {languages[language].rate4}{" "}
                          </th>
                          <th scope="col" style={{ width: "2%" }}>
                            %
                          </th>
                          <th scope="col" style={{ width: "5%" }}>
                            {languages[language].rate3}{" "}
                          </th>
                          <th scope="col" style={{ width: "2%" }}>
                            %
                          </th>
                          <th scope="col" style={{ width: "5%" }}>
                            {languages[language].rate2}{" "}
                          </th>
                          <th scope="col" style={{ width: "2%" }}>
                            %
                          </th>
                          <th scope="col" style={{ width: "5%" }}>
                            {languages[language].rate1}{" "}
                          </th>
                          <th scope="col" style={{ width: "2%" }}>
                            %
                          </th>
                          <th scope="col" style={{ width: "5%" }}>
                            No Input 
                          </th>
                          <th scope="col" style={{ width: "2%" }}>
                            %
                          </th>
                          <th scope="col" style={{ width: "5%" }}>
                            No Match 
                          </th>
                          <th scope="col" style={{ width: "2%" }}>
                            %
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ textAlign: "center" }}>
                        {data.map((item, index) => (
                          <tr key={item.USERNAME}>
                            <th scope="row">{index + startIndex + 1}</th>
                            <td style={{ textAlign: "left" }}>
                              {item.AGENT_NAME}
                            </td>
                            <td>{item.avgscore}</td>
                            <td>
                              {Math.floor(
                                (item.sum * 100) /
                                  (5 * (item.scorelenth + item.nodata))
                              )}
                            </td>
                            <td>{item.scorelenth + item.nodata}</td>
                            <td></td>
                            <td>{item.Score5}</td>
                            <td>
                              {Math.floor(
                                (item.Score5 * 100) /
                                  (item.scorelenth + item.nodata)
                              )}
                            </td>
                            <td>{item.Score4}</td>
                            <td>
                              {Math.floor(
                                (item.Score4 * 100) /
                                  (item.scorelenth + item.nodata)
                              )}
                            </td>
                            <td>{item.Score3}</td>
                            <td>
                              {Math.floor(
                                (item.Score3 * 100) /
                                  (item.scorelenth + item.nodata)
                              )}
                            </td>
                            <td>{item.Score2}</td>
                            <td>
                              {Math.floor(
                                (item.Score2 * 100) /
                                  (item.scorelenth + item.nodata)
                              )}
                            </td>
                            <td>{item.Score1}</td>
                            <td>
                              {Math.floor(
                                (item.Score1 * 100) /
                                  (item.scorelenth + item.nodata)
                              )}
                            </td>
                            <td>{item.nodata}</td>

                            <td>
                              {Math.floor(
                                (item.nodata * 100) /
                                  (item.scorelenth + item.nodata)
                              )}
                            </td>
                            <td></td>
                            <td></td>
                          </tr>
                        ))}
                        <tr>
                          <th colSpan="3" className="align-middle">
                            {languages[language].totaldata}
                            {dataLenth}
                          </th>
                          <th colSpan="11" className="align-middle">
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
                          <th colSpan="8">
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

export default SummarizePointReport;
