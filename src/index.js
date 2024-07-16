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
import { BrowserRouter as Router } from "react-router-dom";
import CRUDDemo from "./CRUD"
import StateWithObjectDemo from "./StateWithObject";
import UseRefHook from "./UseRef_Hooks";
import TextBoxValue from "./TextBoxValue"
import HideShowDemo from "./HideShowDemo"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Testing /> */}
    {/* <CRUDDemo /> */}
    {/* <StaticArrayDemo/> */}
    {/* <FormDemo /> */}
    {/* <StateDemo /> */}
    {/* <AsynchronousDemo /> */}
    {/* <APIDemo/> */}
    {/* <PropsDemo name = "Jack"/> */}
     {/* <StateWithObjectDemo /> */}
    {/* <UseRefHook /> */}
        {/* <TextBoxValue /> */}
        <HideShowDemo />

    {/* <Router>
      <RouterDemo />
    </Router> */}
    

  </React.StrictMode>
);
