import { Fragment } from 'react';

// export default function sum() {
//   const a = 2;
//   const b = 3;

//   let c = a + b;

//   return (
//     <h1 align="center">{c}</h1>
//   );
// }

//export default sum; // it can be put before function name also

const  num = () => {
  const a =  10
  const b = 20
  let c = a + b
function onClickHndler(){
  alert("hello")
}

// function ConditionDemo(){ 
// const a = 1;
//   if(a == 1){
//     console.log("Value of A is 1");
//   }else
//   {
//     console.log("Value of A is Not 1");
//   }

// }

const ConditionTest = () => {
   a == 2 ?  console.log("Value of A is 1") : console.log("Value of A is Not 1")
}

  return(
    <div>
    <h1 align = "center">It is returning {c}</h1>
    
    <button onClick={onClickHndler}>Click Me</button>
    <br></br>
    <br></br>
    {/* <button onClick={ConditionDemo}>Condition Check</button> */}
    <br></br>
    <br></br>
    <button onClick={ConditionTest}>Condition Check</button>
    </div>

  );

  

}
export default num





