import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import './App.css';
import './component/Appform.css';
import './component/Jobcolumn.css'
import { JobColumn } from "./component/JobColumn";
import inProgressImg from  "./images/in-progress.jpg";
import startImg from "./images/to-do-list.jpg"
import completed from './images/completed.png'
import { Appform } from './component/Appform'
import {useEffect, useState} from "react";

const prevJob=localStorage.getItem("job")
console.log("Previous Job",prevJob)
console.log("Local Storage",localStorage.getItem("job"))
function App() {

  const initialJobState=prevJob ? JSON.parse(prevJob) : []
  
  const [job,setJobs] = useState(initialJobState);
  useEffect(()=>{
    localStorage.setItem("job",JSON.stringify(job))
  },[job])

  const callDeleteJobs=(jobUniNumber)=>{
    const filterJob = job.filter((activity,index)=>index !== jobUniNumber)
    setJobs(filterJob)
  }

  return (
    <div className="App">
        <Header/>
        <Appform setJobs={setJobs}/>
          <main className="headerfunc">
            <JobColumn imgIcon={startImg} tit="Need to Complete" status="NeedtoComplete" jobs={job} callDeleteJobs={callDeleteJobs}/>
            <JobColumn imgIcon={inProgressImg} tit="InProgress" status="InProgress" jobs={job} callDeleteJobs={callDeleteJobs}/>
            <JobColumn imgIcon={completed} tit="Completed" status="Completed" jobs={job} callDeleteJobs={callDeleteJobs}/>
          </main>
        <Footer/>
    </div>
  );
}

export default App;
