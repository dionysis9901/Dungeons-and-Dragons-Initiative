import React from "react";
import { Layout, Typography } from "antd";
import LogoImage from "assets/logo.png";

import "./gameLayout.scss";

const { Header, Footer, Sider, Content } = Layout;

export const MainLayout = ({ children }) => (
  <div>
    <Layout>
      <Header className={"header"}>
        <img
          className={"header--logo"}
          src={LogoImage}
          alt={"Dungeons And Dragons Logo"}
        />
        <p className={"header__title"}> INITIATIVES</p>
      </Header>
      <Content>
        <div style={{ height: "calc(100vh - 55px)" }}>{children}</div>
      </Content>
      <Footer className={"footer"}>
        <p className={"footer__appName"}>Dungeons and Dragons Initiative </p>
        <p className={"footer__madeBy"}>Made By Dionysis Koufis</p>
        <p className={"footer__version"}>Version 0.1.0 </p>
        <div className={"footer__logo"}>
          {" "}
          <img
            className={"footer__logo--logo"}
            src={LogoImage}
            alt={"Dungeons And Dragons Logo"}
          />{" "}
        </div>
      </Footer>
    </Layout>
  </div>
);
export default MainLayout;
