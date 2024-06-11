import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  // News,
  Footer,
} from "./components"; //components folder me index.js file in sbko import krne ke liye banayi h
import "./styles/App.scss";
import "./styles/MediaQueries.scss";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              {/* <Route exact path="/news" element={<News />} /> */}
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
