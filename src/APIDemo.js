import React, {useEffect,useState} from "react";

export default function APIDemo(){
    const [data,setData] = useState([])
   useEffect(() => {
    fetch("https://reqres.in/api/users?page=1").then((result) =>{
        result.json().then((resp) =>{
            console.log("result", resp.data);
            setData(resp.data);
   })
        
    })
},[])


return(
    <div>
    <h1 align = "center">Get API Call Fetch</h1>
     <table border={1} align="center">
        
            <tr>
                <td>
                id
                </td>
                <td>
                email
                </td>
                <td>
                first_name
                </td>
                <td>
                last_name
                </td>
                <td>
                avatar
                </td>
            </tr>
       
        {
            data.map((item,i) =>
            <tr key ={i}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.avatar}</td>
            </tr>
            )
        }
           
     </table>
    </div>
);
}