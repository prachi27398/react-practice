import React,{useState} from 'react'

export const Appform = ({setJobs}) => {

  const[activityformdata,setActivityFormData]=useState({
    activity:"",
    status:"NeedtoComplete",
    category:[]
  })

  const addCsstoButton={
    ReadEmails:{backgroundColor:"orange"},
    WebParsing:{backgroundColor:"yellow"},
    SendEmails:{backgroundColor:"blue"},
    default:{backgroundColor:"white"}
  }

  const callFunctionForm=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setActivityFormData(ini =>{
      return{...ini, [name]:value}
    })
  }
  
  const CallSsubmitForm=(e)=>{
    e.preventDefault();
    console.log(activityformdata)
    setJobs(prev=>{
      return[...prev,activityformdata]
    })

    setActivityFormData({
      activity:"",
      status:"InProgress",
      category:[]
    })
  }

  const validateCategory=(cat)=>{
    return activityformdata.category.some((item)=>item===cat)
    
  }


  const selectCategory=(cat)=>{
    console.log(cat)
    if(activityformdata.category.some((item)=>item===cat)){
      const filtercategory=activityformdata.category.filter((item)=>item!==cat)
      setActivityFormData((prev)=>{
        return{...prev,category:filtercategory}
      })
    }else{
      setActivityFormData((prev)=>{
        return{...prev,category:[...prev.category,cat]}
      })
    }
  }

  console.log(activityformdata.category)
  
  return (
    <div>
      <form className='formheader' onSubmit={CallSsubmitForm}>
        
          <input type='text' value={activityformdata.activity} name='activity' className='bot_in' placeholder='Enter the job' onChange={callFunctionForm}></input>
    
        <div className='formdetails'>
            <div className='bottomline'>
              
                <button type='button' style={validateCategory("ReadEmails")?addCsstoButton["ReadEmails"]:addCsstoButton["default"]} className='tag' onClick={()=>selectCategory('ReadEmails')} >Read Emails</button>
                <button type='button' style={validateCategory("WebParsing")?addCsstoButton["WebParsing"]:addCsstoButton["default"]} className='tag' onClick={()=>selectCategory('WebParsing')}>Web Parsing</button>
                <button type='button' style={validateCategory("SendEmails")?addCsstoButton["SendEmails"]:addCsstoButton["default"]} className='tag' onClick={()=>selectCategory('SendEmails')}>Send Emails</button> 

            </div>
            <div>
                <select name='status' className='jobStatus' value={activityformdata.status} onChange={callFunctionForm}>
                    <option vaule="NeedtoComplete">Need to Complete</option>
                    <option value="InProgress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <button type='submit' className='submitdata'>Add Jobs</button>
            </div>
        </div>
      </form>
    </div>
  )
}

