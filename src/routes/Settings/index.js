import React from "react";
import { Link } from "react-router-dom";
import { Typography, Form, Input, Button, Space, Card, Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { actions as settingsActions } from "modules/settings";
import { useSelector, useDispatch } from "react-redux";
import "./settings.scss";

export const Settings = () => {
  const dispatch = useDispatch();
  const { playersReady, mobsReady } = useSelector(
    (state) => state && state.settings
  );

  const playersFinish = (playersArr) => {
    const players = playersArr.players.map((player) => {
      return { ...player, played: false };
    });
    console.log(players);
    dispatch(settingsActions.storePlayers(players));
  };

  const mobsFinish = (mobsArr) => {
    const mobs = mobsArr.mobs.map((mob) => {
      return { ...mob, played: false };
    });
    dispatch(settingsActions.storeMobs(mobs));
  };

  return (
    <div className={"settings"}>
      <div className={"settings__title"}>
        <Typography.Title level={3}>Settings </Typography.Title>
      </div>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Col style={{ margin: "10px 0" }} xs={24} sm={24} md={11} lg={9} xl={8}>
          <Card
            style={{ fontFamily: `"Cinzel", serif` }}
            className={"settings__cards"}
          >
            <div className={"settings__playerForm"}>
              <div className={"settings__playerForm__title"}>
                <Typography.Title level={4}>Player</Typography.Title>
              </div>
              <Form
                scrollToFirstError
                name="dynamic_form_nest_item"
                onFinish={playersFinish}
                autoComplete="yes"
              >
                <Form.List name="players">
                  {(fields, { add, remove }) => {
                    return (
                      <div>
                        {fields.map((field) => (
                          <Space
                            key={field.key}
                            style={{ display: "flex", marginBottom: 8 }}
                            align="start"
                          >
                            <Form.Item
                              {...field}
                              name={[field.name, "name"]}
                              className={"formItem__name"}
                              fieldKey={[field.fieldKey, "name"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing Player name",
                                },
                              ]}
                            >
                              <Input placeholder="Player Name" maxLength={40} />
                            </Form.Item>
                            <Form.Item
                              {...field}
                              name={[field.name, "initiative"]}
                              className={"formItem__number"}
                              fieldKey={[field.fieldKey, "initiative"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Invalid Initiative",
                                },
                              ]}
                            >
                              <Input
                                type="number"
                                min={0}
                                max={20}
                                placeholder="Init"
                              />
                            </Form.Item>

                            <MinusCircleOutlined
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          </Space>
                        ))}

                        <Form.Item>
                          <Button
                            type="ghost"
                            danger
                            bordered
                            onClick={() => {
                              add();
                            }}
                            block
                          >
                            <PlusOutlined /> Add Player
                          </Button>
                        </Form.Item>
                      </div>
                    );
                  }}
                </Form.List>

                <Form.Item>
                  <Button danger htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </Col>

        <Col style={{ margin: "10px 0" }} xs={24} sm={24} md={11} lg={9} xl={8}>
          <Card className={"settings__cards"}>
            <div className={"settings__mobForm"}>
              <div className={"settings__mobForm__title"}>
                <Typography.Title level={4}>Mobs</Typography.Title>
              </div>
              <Form
                name="dynamic_form_nest_item"
                onFinish={mobsFinish}
                autoComplete="yes"
              >
                <Form.List name="mobs">
                  {(fields, { add, remove }) => {
                    return (
                      <div>
                        {fields.map((field) => (
                          <Space
                            key={field.key}
                            style={{ display: "flex", marginBottom: 8 }}
                            align="start"
                          >
                            <Form.Item
                              {...field}
                              name={[field.name, "name"]}
                              className={"formItem__name"}
                              fieldKey={[field.fieldKey, "name"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing Player name",
                                },
                              ]}
                            >
                              <Input placeholder="Player Name" maxLength={40} />
                            </Form.Item>
                            <Form.Item
                              {...field}
                              name={[field.name, "initiative"]}
                              className={"formItem__number"}
                              fieldKey={[field.fieldKey, "initiative"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Invalid Initiative",
                                },
                              ]}
                            >
                              <Input
                                min={0}
                                max={20}
                                type="number"
                                placeholder="Init"
                              />
                            </Form.Item>

                            <Form.Item
                              {...field}
                              name={[field.name, "hp"]}
                              className={"formItem__number"}
                              fieldKey={[field.fieldKey, "hp"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Invalid HP number",
                                },
                              ]}
                            >
                              <Input min={0} type="number" placeholder="HP" />
                            </Form.Item>

                            <Form.Item
                              {...field}
                              name={[field.name, "xp"]}
                              className={"formItem__number"}
                              fieldKey={[field.fieldKey, "xp"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Invalid XP number",
                                },
                              ]}
                            >
                              <Input type="number" min={0} placeholder="xp" />
                            </Form.Item>

                            <MinusCircleOutlined
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          </Space>
                        ))}

                        <Form.Item>
                          <Button
                            type="ghost"
                            danger
                            bordered
                            onClick={() => {
                              add();
                            }}
                            block
                          >
                            <PlusOutlined /> Add Mob
                          </Button>
                        </Form.Item>
                      </div>
                    );
                  }}
                </Form.List>

                <Form.Item>
                  <Button danger htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>{" "}
      <div className={"settings__fightButton"}>
        {playersReady && mobsReady ? (
          <Button danger style={{ fontSize: "1.3em" }}>
            <Link to={`/Play`}> FIGHT ! </Link>
          </Button>
        ) : (
          <Button disabled style={{ fontSize: "1.3em" }}>
            FIGHT !{" "}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Settings;
