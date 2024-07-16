import React from "react";

export default function HideShowDemo(){
    const [status,setStatus] = React.useState(true);

    return(
        <div>
        {
            status ?<h1>Hello Demo</h1> : null
        }
        <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button>
        </div>
    );
}