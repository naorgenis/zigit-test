import React from "react";
import { useSelector } from "react-redux";
import Info from "../../containers/Info";

function InfoScreen(props) {
  const isAuth = useSelector((state) => state.token !== null);

  return isAuth ? <Info /> : <p>This is a calssified data please login</p>;
}

export default InfoScreen;
