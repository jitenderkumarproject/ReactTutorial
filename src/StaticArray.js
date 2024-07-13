function StaticArrayDemo(){
 
    const Employee = [

  {SNo : 1, name : "Anil",Designation : "Developer", Email : "anil@gmail.com", Phone : 55555 },
  {SNo : 2, name : "Raj",Designation :"Developer", Email : "Raj@gmail.com", Phone : 6666 },
  {SNo : 3, name : "Monu",Designation : "Developer", Email : "Monu@gmail.com", Phone : 7777 },
  {SNo : 4, name : "Sahil",Designation : "Developer", Email : "Sahil@gmail.com", Phone : 8888 },
  {SNo : 5, name : "Suresh",Designation : "Developer", Email : "Suresh@gmail.com", Phone : 9999 }

    ]

  return(
    <div align = "center">
        <h1 align = "center">Static Array Demo</h1>



        <table border={1}>
        <tr>
        <th>S.No</th>
        <th>name</th>
        <th>Designation</th>
        <th>Email</th>
        <th>Phone</th>
        </tr>
    {
      Employee.map((data) =>
      
      <tr>
      
        <td>{data.SNo}</td>
        <td>{data.name}</td>
        <td>{data.Designation}</td>
        <td>{data.Email}</td>
        <td>{data.Phone}</td>
      </tr>
      
      )

    }
       </table>
    </div>

  );

}

export default StaticArrayDemo





