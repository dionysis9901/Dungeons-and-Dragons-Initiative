import React from "react";
import { Layout, Divider } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import LogoImage from "assets/logo.png";

import "./gameLayout.scss";

const { Header, Footer, Content } = Layout;

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
        <div className={"footer__flex"}>
          <div>
            <p className={"footer__appName"}>
              Dungeons and Dragons Initiatives{" "}
            </p>
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
          </div>

          <div>
            <ul className="footer__socialMedia">
              <li className="footer__socialMedia__item">
                <a href="https://github.com/dionysis9901">
                  <GithubOutlined
                    style={{ color: "#e8ecd6", fontSize: "2em" }}
                  />
                </a>
              </li>
              <li className="footer__socialMedia__item">
                <a href="https://twitter.com/KoufisDionysis">
                  <TwitterOutlined
                    style={{ color: "#e8ecd6", fontSize: "2em" }}
                  />
                </a>
              </li>
              <li className="footer__socialMedia__item">
                <a href="https://www.linkedin.com/in/dionysis-koufis-5b66a2192/">
                  {" "}
                  <LinkedinOutlined
                    style={{ color: "#e8ecd6", fontSize: "2em" }}
                  />
                </a>
              </li>
              <li className="footer__socialMedia__item">
                <a href="https://www.instagram.com/dionysis_koufis/">
                  <InstagramOutlined
                    style={{ color: "#e8ecd6", fontSize: "2em" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Footer>
    </Layout>
  </div>
);
export default MainLayout;
