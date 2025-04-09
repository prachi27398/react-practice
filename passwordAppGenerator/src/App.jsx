import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
 const [len,setLen] = useState(10);
 const[numAllow,setNumAllow] = useState(false)
 const[charAllow,setCharAllow] = useState(false)
 const[pass,setPassword]=useState("")

 const passwordasRef = useRef(null)

 const passwordGenerator=useCallback(()=>{
  let pass="";
  let strdata="ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz"
  if(numAllow) strdata +="0123456789"
  if(charAllow) strdata +="!$%^&@~`"
  for (let index = 0; index < len; index++){
    let char=Math.floor(Math.random()*strdata.length+1)
    pass+=strdata.charAt(char)
  }
  setPassword(pass)
},[len,numAllow,charAllow,setPassword])

const copyFunction=useCallback(()=>{
  passwordasRef.current?.select();
  window.navigator.clipboard.writeText(pass)
},[pass])

useEffect(()=>{passwordGenerator();},[len,numAllow,charAllow,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-screen-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-800 text-orange-500'>
        <h1>Passwords Generator App</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={pass} className='outline-none w-full py-1 px-3 bg-white' placeholder='Password' readOnly ref={passwordasRef}/>
          <button onClick={copyFunction} className='outline-none bg-slate-400 text-white px-4 py-1 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={100} value={len} className='cursor-pointer' onChange={(e)=>{setLen(e.target.value)}}/>
            <label>Length:{len}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numAllow} id="numInput" onChange={()=>{setNumAllow((previous)=>!previous)}}/>
            <label htmlFor='numInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' id="charInput" defaultChecked={charAllow} onChange={()=>{setCharAllow((previous)=>!previous)}} />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default App
