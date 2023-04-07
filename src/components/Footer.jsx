import React from "react";
import { Link } from "react-router-dom";
import { Typography, Space } from "antd";

const { Title } = Typography;

const Footer = () => {
  return (
    <>
      <Title level={5} style={{ color: "white", textAlign: "center" }}>
        Kryptoo
        <br />© All Rights Reserved
      </Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/cryptocurrencies">CryptoCurrencies</Link>
        <Link to="/news">News</Link>
      </Space>
    </>
  );
};

export default Footer;
