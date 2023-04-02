import React from "react";
import { Spin } from "antd";
import "../styles/Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <Spin />
    </div>
  );
};

export default Loader;
