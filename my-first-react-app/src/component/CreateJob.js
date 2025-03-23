import { useState } from 'react'
import { EachBots } from './EachBots'
import { TicketInformation } from './TicketInformation'
import completedImg from '../images/completed.png'
import inProgressImg from '../images/in-progress.jpg'
import failedImg from '../images/failed.jpg'

export const CreateJob = (props) => {

    let [jobcounter,setJobCounter] = useState(0)
    const [newBot,setNewBot] = useState({id:"",botname:"",status:""})

    const [bots,setBotValues] = useState([{id:1,botname:"Extractioin Emails",status:"Running"},{id:2,botname:"Sending Email Notification",status:"completed"},{id:3,botname:"Read Emails",status:"Stopped"},])

    const handleClickEvent = () =>{
        setJobCounter(jobcounter+1)
        console.log('Run Job',jobcounter)
    }

    function handleDelete(id){
        setBotValues(bots.filter(bot=>id !== bot.id))
    }

    const addBotToList = () =>{
        if(newBot.id.trim()!=='' && newBot.botname.trim()!=='' && newBot.status.trim()!=='')
        {
            setBotValues([...bots,newBot])
            setNewBot({id:'',botname:'',status:''})
        }
    }

    const [show,setShow] = useState(false)

  return (
    <div>
        <h1>Bots running in {props.jobRun} for the year {props.fiscalYear} are : {jobcounter}</h1>
        <button onClick={handleClickEvent} value="Run job">Incremented Counter Bots</button>
        <ul>
            <button onClick={()=>setShow(!show)}>Click Here</button>
            {show && bots.map((bot) =>(<EachBots bot={bot} handleDelete={handleDelete}/>))}
        </ul>

        <br>
        </br>
        
        <input type="text" value={newBot.id} placeholder='Id' onChange={(e) => setNewBot({...newBot,id:e.target.value})}></input>
        <input type="text" value={newBot.botname} placeholder="Botname" onChange={(e) => setNewBot({...newBot,botname:e.target.value})}></input>
        <input type="text" value={newBot.status} placeholder="Status" onChange={(e) => setNewBot({...newBot,status:e.target.value})}></input>
        <button onClick={addBotToList}>Add Bots</button>
        <h1>Tickets Dashboard</h1>
        <div className='status-board'>
            <TicketInformation res="completed"><p>Tickets Completed</p><img src={completedImg} alt="Completed" width={100}></img></TicketInformation>
            <TicketInformation res="in-progress"><p>Tickets In Progress</p><img src={inProgressImg} alt="In Progress" width={100}></img></TicketInformation>
            <TicketInformation res="failed"><p>Tickets Failed</p><img src={failedImg} alt="Failed" width={100}></img></TicketInformation>
         
        </div>
    </div>
  )
}

