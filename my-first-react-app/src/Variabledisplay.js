import React from "react";

function VariableDisplay(){
    //Create Variables here

    let stringVar = "Welcome My React Project";
    let numVar = 26;
    let booleanVar = false;
    let arrayVar = ["React","Vuejs","JSX"];
    let objectVar = {name:"John",age:29,role:"Back-end Developer"};

    //Add Conditional Statement
    if(Math.random()> 0.2){
        stringVar = "Welcome to advanced React";
    }

    return (
        <div>
            <h1>{stringVar}</h1>
            <h1>{numVar}</h1>
            <h1>{booleanVar}</h1>
            <h1>{arrayVar}</h1>
            <h1>{objectVar.name}</h1>
        </div>
    )
}

export default VariableDisplay;