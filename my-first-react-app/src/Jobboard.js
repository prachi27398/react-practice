import React from 'react'

const Jobboard = () => {
    const companyName = "CELESTE OFFICIAL LTD";
    const jobCount = 20;
    const getJobMessage = () =>{
        return jobCount===0 ? "No jobs to schedule today" : `Jobs running today from bot: ${jobCount}`;
    }
  return (
    <div>
      <h1>Welcome To Dashboard</h1>
      <p>Company Name : {companyName}</p>
      <p>{getJobMessage()}</p>
    </div>
  )
}

export default Jobboard
