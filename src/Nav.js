import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div>
             <Link to ="/home">Home Page</Link>
          <br />
             <Link to ="/About">About Page</Link>
        </div>
    )
}