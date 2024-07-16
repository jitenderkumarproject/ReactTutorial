import React from "react";

export default function ConditionOperator (){

    //const [state,setState] = React.useState(true);
   // const [state,setState] = React.useState(false);
   const [state,setState] = React.useState(3);

    return(
        <div>
            {
                state == 1 ? <h1>State is 1</h1> : state == 2 ? <h1>State is  2</h1> : <h1>Default User</h1>
            }
        </div>
    );
}