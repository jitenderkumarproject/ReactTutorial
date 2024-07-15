import React from "react";
import ReactDOM from "react-dom/client";
import Testing from "./App";
import StaticArrayDemo from "./StaticArray";
import FormDemo from "./FormDisplay";
import StateDemo from "./StateDemo";
import AsynchronousDemo from "./AsynchronousTutorial";
import APIDemo from "./APIDemo";
import PropsDemo from "./PropsDemo";
import RouterDemo from "./RouterDemo";
import { BrowserRouter as Router , Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Testing /> */}

    {/* <StaticArrayDemo/> */}
    {/* <FormDemo /> */}
    {/* <StateDemo /> */}
    {/* <AsynchronousDemo /> */}
    {/* <APIDemo/> */}
    {/* <PropsDemo name = "Jack"/> */}

    <Router>
      <RouterDemo />
    </Router>

  </React.StrictMode>
);
