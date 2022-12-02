import React from "react";
import App from "./App";
import "./App.css";

const Rec = function () {
  return (
    <div>
      <h3>MoviesApp</h3>
      <div>
        <div className=" dib searchbox bg-blue  "></div>
        <button className="button">search</button>
      </div>
      <App />,
      <App />,
      <App />,
      <App />,
    </div>
  );
};

export default Rec;
