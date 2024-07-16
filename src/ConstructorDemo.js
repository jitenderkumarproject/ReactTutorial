
import React  from "react";

export default class ConstructorDemo extends React.Component{
    constructor(){
        console.log("constructor")
        super();
        this.state = {
            data : "jack"
            
        }
    }

    render()
    {
        console.log("Render")
        return(
            <h1>Hello This is {this.state.data}</h1>
        )
    }
}