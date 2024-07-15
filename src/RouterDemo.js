//npm install react-router-dom
import { Link, Route, Routes} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import React from "react";
import PageNotFound from "./404";

export default function RouterDemo() {
  return (
    <div>
      <Nav />
      <Routes>
     
        <Route path="/About" element=<About />></Route>
        <Route path="/Home" element=<Home />></Route>
        <Route path="*" element=<PageNotFound />></Route>
       
      </Routes>
    </div>
  );
}
