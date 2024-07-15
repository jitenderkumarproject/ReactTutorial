//Hook used to modify dom objects

import React, {useRef} from "react";

export default function UseRefHook(){
    let InputRef = useRef("");

    function HandleInput(){
    InputRef.current.value = "1000";
    InputRef.current.focus();
    // InputRef.current.style.display = "none"
    }
    return(
    <div>
        <h1>useRef Hook in React</h1>
        <input type="text" ref={InputRef}></input>

            <button onClick={HandleInput}>Handle Input Submit</button>
        
    </div>
    );
}