import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as settingsActions } from "modules/settings";
import { Button } from "antd";

const Player = ({ name, initiative, status }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(status);

  return (
    <li className={"player__playerList__player"}>
      <div className={"player"}>
        <p className={"player--name"}> {name}</p>
        <div className={"player__actions"}>
          Initiative{" "}
          <span className={"player__actions--initiative"}>{initiative}</span>{" "}
          {!active ? (
            <Button
              onClick={() => {
                setActive(true);
                dispatch(settingsActions.played());
              }}
              danger
            >
              Round Done
            </Button>
          ) : (
            <Button disabled>This Player Played</Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Player;
