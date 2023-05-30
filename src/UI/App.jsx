import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";
import sx from "./App.module.scss";
const { ipcMain, ipcRenderer, Menu } = require("electron");

export const App = () => {
  const [sources, setSources] = useState([]);
  const [state, setState] = useState(false);

  const handleReset = () => {
    console.log("hello");
    setState((i) => !i);
  };
  return (
    <>
      <div className={sx.holder}>
        <Timer state={state} />
        <div className={sx.button_holder}>
          <button
            style={{
              border: state ? "1px solid cyan" : "1px solid rgb(255, 0, 106)",
              outline: state ? "1px solid cyan" : "1px solid rgb(255, 0, 106)",
            }}
            onClick={() => handleReset()}
          >
            {!state ? "Start" : "Reset"}
          </button>
        </div>
      </div>
    </>
  );
};
