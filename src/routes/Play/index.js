import React, { useState } from "react";
import { Typography, Form, Input, Button, Space, Card, Row, Col } from "antd";
import "./play.scss";
import { useSelector, useDispatch } from "react-redux";
import { Player } from "components";

export const Play = () => {
  const { players, mobs } = useSelector((state) => state.settings);

  const initiativesAscending = [...players, ...mobs].sort((a, b) =>
    a.initiative > b.initiative ? -1 : 1
  ); //currently not working

  return (
    <div className={"play"}>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Col style={{ margin: "10px 0" }} xs={24} sm={24} md={11} lg={9} xl={8}>
          <Card title="All Initiatives Ascending" className={"play__card"}>
            <ul className={"player__playerList"}>
              {initiativesAscending.map(({ name, initiative }) => {
                return (
                  <Player name={name} initiative={initiative} status={false} />
                );
              })}
            </ul>
          </Card>
        </Col>
        <Col style={{ margin: "10px 0" }} xs={24} sm={24} md={11} lg={9} xl={8}>
          <Card title="Mobs Panel" className={"play__card"}></Card>
        </Col>{" "}
      </Row>
    </div>
  );
};

export default Play;
