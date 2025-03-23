import React from 'react'
import { useState } from 'react'

const JobCounter = () => {

    let [JobCounter,setJobCounter] = useState(0)
    const [inputVal,setInputVaule]=useState("")

    const handleAddJob = () => {
        setJobCounter(JobCounter+1);
        console.log("job",JobCounter);
    }

    const handleChange = (event) => {
      setInputVaule(event.target.value)
    }

    const handleReset = () => {
      setInputVaule("")
    }

  return (
    <div>
      <h1>Bots running in Production are: {JobCounter}</h1>
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleAddJob}>Creat a New Job</button>
      <h1>Input value: {inputVal}</h1>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default JobCounter
