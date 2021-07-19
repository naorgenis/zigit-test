import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BasicTable from "../component/UI/Table/BasicTable";
import { DATA_COLUMNS, USER_COLUMNS } from "../utils/Columns";
import "./Info.css";

function Info(props) {
  const [isLoading, setIsLoading] = useState(true);
  const userData = [JSON.parse(localStorage.getItem("userData"))];

  const [data, setData] = useState([]);

  const token = useSelector((state) => state.token);

  useEffect(() => {
    axios
      .get("https://private-052d6-testapi4528.apiary-mock.com/info", {
        Header: { Authorization: "Berear" + token },
      })
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="BasicTable">
      <div className="UserTable">
        <BasicTable data={userData} column={USER_COLUMNS} />
      </div>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          <BasicTable data={data} column={DATA_COLUMNS} />
        </div>
      )}
    </div>
  );
}

export default Info;
