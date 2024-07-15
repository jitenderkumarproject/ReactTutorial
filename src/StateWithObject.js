import React from "react";

export default function StateWithObjectDemo() {
  const [data, setData] = React.useState({ name: "Anil", Age: 27 });

  return (
    <div align="center">
      

      <input type="text" placeholder="Enter Name" value={data.name} onChange={(e)=>{setData({...data ,name:e.target.value})}}>
       
      </input>
      <input type="text" placeholder="Enter Age" value={data.Age} onChange={(e)=>{setData({...data,Age:e.target.value})}}></input>

      <h1>Name : {data.name}</h1>
      <br />
      <h1>Age : {data.Age}</h1>
    </div>
  );
}
