import React, { useEffect, useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  FundOutlined,
  // BulbOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../assets/cryptocurrency.png";
import "../styles/Navbar.scss";
const { Title } = Typography;
const { Item } = Menu;

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Title level={2} className="logo">
          <Link to="/">Kryptoo</Link>
        </Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark" style={{ backgroundColor: "#233447" }}>
          <Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Item>
          <Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">CryptoCurrencies</Link>
          </Item>
          {/* <Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Item> */}
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
