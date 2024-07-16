import { useState } from "react";

export default function TextBoxValue() {

const [data,setData] = useState("");  
const [print,setPrint] = useState(false);

function getData(event){

//    console.log(event.target.value);
   setData(event.target.value)
   
}

    return(
        <div>
         {print ? <h1>{data}</h1> : null}

         <input type="text" onChange={getData}></input>

         
         <button onClick={()=>setPrint(true)}>Print Data</button>
        </div>
    );
}