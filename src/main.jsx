import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GenInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div id="body_cont">
      <div id="form_container">
        <GenInfo />
        <Education />
      </div>
      <div id="cv_container">Test</div>
    </div>
  </React.StrictMode>
);
