import React from 'react'

export const Appform = () => {
  return (
    <div>
      <form className='formheader'>
        
          <input type='text' className='bot_in' placeholder='Enter the job'></input>
    
        <div className='formdetails'>
            <div className='bottomline'>
                <button className='tag'>Read Emails</button>
                <button className='tag'>Web Parsing</button>
                <button className='tag'>Send Emails</button>
            </div>
            <div>
                <select className='jobStatus'>
                    <option vaule="start">Start Process</option>
                    <option value="Running">Stop Process</option>
                    <option value="completed">Completed Process</option>
                </select>
                <button type='submit' className='submitdata'>Add Jobs</button>
            </div>
        </div>
      </form>
    </div>
  )
}

