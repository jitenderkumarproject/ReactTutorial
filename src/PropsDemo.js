import React from "react";

export default class PropsDemo extends React.Component{

    constructor(){
    super();
    this.state ={
        name : "Anil"
    }
    }

    render(){

        return(
            <div align ="center">
                <h1> Hello {this.props.name} This is Props Testing</h1>
                <PropsDemo name={this.state.name}></PropsDemo>
                <button onClick={() => this.setState({name: "Changed Jack"})}></button>
            </div>
        );
    }

}