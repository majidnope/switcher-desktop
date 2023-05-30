import React, { useEffect, useState } from "react";
import sx from "./Timer.module.scss";
import moment from "moment/moment";
const Timer = ({ state }) => {
  const [time, setTime] = useState(moment({ hour: 0, minute: 0, second: 0 }));
  const [intervalID, setIntervalID] = useState();
  useEffect(() => {
    clearInterval();
  }, []);
  useEffect(() => {
    console.log(state);
    if (state) {
      const id = setInterval(() => {
        setTime((preTime) => preTime.clone().add(1, "second"));
      }, 1000);
      setIntervalID(id);
    } else {
      setTime(moment({ hour: 0, minute: 0, second: 0 }));
      clearInterval(intervalID);
    }
  }, [state]);

  const formattedTime = time.format("HH:mm:ss");
  return (
    <div className={sx.timer}>
      <h1>{formattedTime}</h1>
    </div>
  );
};

export default Timer;
