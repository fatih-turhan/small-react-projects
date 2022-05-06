import React from "react";
import { useEffect } from "react";

const Alert = ({ state, msg, type, showAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      showAlert();
    }, 2500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [list]);
  console.log(msg);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
