import userEvent from "@testing-library/user-event";
import React, {useState} from "react";

export default function FormDemo(){

    const [EName,setENameData] = useState(null)
    const [EPhone,setEPhoneData] = useState(null)
    const [EDesignation,setEDesignationData] = useState(null)
    const [EEmail,setEEmailData] = useState(null)
   
    function EmployeeTable(){
   
        function GetEmployeeData(){
        const [GetUserObject,SetUserObject] = useState({
        EEName : EName,
        EEPhone : EPhone,
        EEDesignation : EDesignation,
        EEmail : EEmail
       })
        }

        return(
    <table border={1} align="center">
        <tr>
            <th align="center">CRUD</th>
        </tr>
             <tr>
            <td>Name</td>
            <td><input placeholder="Enter Your Name" onInput={(e) =>setENameData(e.target.value)}></input></td>
            </tr>
            <tr>
            <td>Phone</td>
            <td><input placeholder="Input Your Phone Number" onInput={(e) =>setEPhoneData(e.target.value)} ></input></td>
            </tr>
        
        <tr>
        <td>Designation</td>
        <td><input placeholder="Enter Your Designation" onInput={(e) =>setEDesignationData(e.target.value)}></input></td>
        </tr>
           <tr>
           <td>Email</td>
           <td><input placeholder="Enter Your Email ID" onInput={(e) =>setEEmailData(e.target.value)}></input></td>
           </tr>
           <tr>
            <td>
                <button onClick={GetEmployeeData}>Submit</button>
            </td>
           </tr>

    </table>
    )

    }


    return(
        <div>
{EmployeeTable()}
        
        <table border={1} align="center">
            <tr>
                <th>
                 Employee Name
                </th>
                <th>
                 Designation
                </th>
                <th>
                 Email
                </th>
                <th>
                 Phone
                </th>
            </tr>
           
                <tr>
                    <td>{EName}</td>
                    <td>{EDesignation}</td>
                    <td>{EEmail}</td>
                    <td>{EPhone}</td>
                </tr>
            
           </table>
           </div>
    );
}

