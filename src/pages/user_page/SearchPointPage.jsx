import axios from "axios";
import React, { useEffect, useState } from "react";
import th from "./MessageComponent/SearchPointPageTH";
import en from "./MessageComponent/SearchPointPageEN";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
function SearchPointPage() {
  const languages = {
    th,
    en,
  };
  const language = localStorage.getItem("language");
  const [data, setData] = useState([]);
  const [dataPercentage, setDataPercentage] = useState([]);
  const [dataPercentageLenth, setDataPercentageLenth] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startDate, setStartDate] = useState("2019-06-06");
  const [endDate, setEndDate] = useState("2024-06-06");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const getdata = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/getdatafotsearchgharp",
        { startDate, endDate }
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await axios.post(
        "http://localhost:3001/getdataforsearchpercentage",
        { startDate, endDate }
      );
      setDataPercentageLenth(response.data[0]);
      setDataPercentage(response.data[1]);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    console.log(data);
    console.log(dataPercentage);
    console.log(dataPercentageLenth);
  }, [data, dataPercentage, dataPercentageLenth]);

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
        <div className="card">
          <div className="h5 card-header align-items-center text-white p-2">
            {languages[language].searchCondition}
          </div>
          <div className=" ">
            <div className="card w-100 ">
              <form style={{ width: "95%" }}>
                <div className="row align-items-center p-2 mt-3 ">
                  <div className="col-2 px-5">
                    <div>{languages[language].date}</div>
                  </div>
                  <div className="col-3">{languages[language].startDate}</div>
                  <div className="col-3">{languages[language].endDate}</div>
                </div>
                <div className="row align-items-center p-2">
                  <div className="col-2 "></div>
                  <div className="col-3">
                    <input
                      onChange={(e) => {
                        setStartDate(e.target.value);
                      }}
                      type="date"
                      className="form-control"
                      placeholder="DD/MM/YY"
                    ></input>{" "}
                  </div>
                  <div className="col-3">
                    <input
                      onChange={(e) => {
                        setEndDate(e.target.value);
                      }}
                      type="date"
                      className="form-control"
                      placeholder="DD/MM/YY"
                    ></input>
                  </div>
                  <div className="row p-2 mt-3">
                    <div className="col-2 px-5">
                      {languages[language].reportType}
                    </div>
                    <div className="col-3">
                      <div className="row px-4">
                        <div className="form-check ">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            defaultChecked
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            {languages[language].byHour}{" "}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            {languages[language].byDay}{" "}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            {languages[language].byMonth}{" "}
                          </label>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col">
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="py-3">
          <div className="btn btn-success ">
            <dir className="d-flex p-0 m-0 justify-content-center align-items-center">
              <i className="bi bi-download"></i>
              <div className="ps-2">{languages[language].dowloadExcelfile}</div>
            </dir>
          </div>
        </div>
        <div className="row p-0 m-0 mb-3">
          <div className="col-4 p-0">
            <div className="card">
              <div className="h5 card-header align-items-center text-white p-2">
                {languages[language].resault}
              </div>
              <div className=" ">
                <div className="card w-100 ">
                  <div className="pt-3">
                    <div className="px-2 py-0 my-0">
                      <h3 style={{ display: "inline" }}>
                        {languages[language].today}
                      </h3>
                      <p className="ps-3 fs-5" style={{ display: "inline" }}>
                        {currentTime.toLocaleTimeString()}
                      </p>
                      <p className="py-0 my-0" style={{ color: "#7e7e7e" }}>
                        ({languages[language].totalCall} {dataPercentageLenth} )
                      </p>
                    </div>
                    <div className="d-flex justify-content-center my-0 py-0">
                      <hr style={{ width: "90%" }} />{" "}
                    </div>
                    {dataPercentage.map((data, index) => (
                      <div className="" key={index}>
                        <div className="mt-2">
                          <h4 className="text px-3 py-0 my-0">{data.value}</h4>
                          <div className="d-flex">
                            <div className="col d-flex justify-content-start py-0 my-0 ps-3">
                              {data.name}{" "}
                            </div>
                            <div className="col d-flex justify-content-end py-0 my-0 pe-5">
                              {data.valuepercentage}%
                            </div>
                          </div>
                          <div className="mainDiv">
                            <div
                              className="childDiv"
                              style={{ width: `${data.valuepercentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card">
              <div className="h5 card-header align-items-center text-white p-2">
                {languages[language].resault}
              </div>
              <div className=" ">
                <div className="card w-100 ">
                  <div className="d-flex justify-content-center py-3">
                    <BarChart width={730} height={250} data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Score1" fill="#008EBB" />
                      <Bar dataKey="Score2" fill="#33CEFF" />
                      <Bar dataKey="Score3" fill="#008EBB" />
                      <Bar dataKey="Score4" fill="#33CEFF" />
                      <Bar dataKey="Score5" fill="#008EBB" />
                    </BarChart>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="h5 card-header align-items-center text-white p-2">
                ผลการค้นหา
              </div>
              <div className=" ">
                <div className="card w-100 ">
                  <div className="d-flex justify-content-center py-3">
                    <BarChart width={730} height={250} data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Score1" fill="#008EBB" />
                      <Bar dataKey="Score2" fill="#33CEFF" />
                      <Bar dataKey="Score3" fill="#008EBB" />
                      <Bar dataKey="Score4" fill="#33CEFF" />
                      <Bar dataKey="Score5" fill="#008EBB" />
                    </BarChart>
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

export default SearchPointPage;
