import React from 'react'
import deleteIcon from '../images/delete-icon.jpeg'
import './JobStatus.css'

export const JobStatus = ({activity,category,callDeleteJobs,jobUniNumber}) => {
  return (
    <article className='jobStateArt'>
      <p className='textArticle'>{ activity }</p>
      <div className='jobBox'>
      <div className='jobStatBox'>
        {category.map((cat,index)=>
         (<button key={index} className="tag">{cat}</button>
         ))}
                
      </div>
      <div className='jobDelete'>
        <img src={deleteIcon} className='deletingImg' onClick={()=>callDeleteJobs(jobUniNumber)}  alt="Delete"/>
      </div>
      </div>
    </article>
  )
}


