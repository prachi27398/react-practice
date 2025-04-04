import React from 'react'
import { JobStatus } from './JobStatus'

export const JobColumn = ({tit,imgIcon,status,jobs,callDeleteJobs}) => {
  const filteredJobs = jobs.filter(job=>job.status === status);
 
  return (
        <section className="columns">
            <h2 className='columnHeading'>{tit}</h2>
            <img src={imgIcon} className='columnImg' alt="Need to start"/>
            {filteredJobs.map((job,index)=>(
              <JobStatus key={index} activity={job.activity} category={job.category} callDeleteJobs={callDeleteJobs} jobUniNumber={index}/>
            ))}
            
        </section>
  )
}
