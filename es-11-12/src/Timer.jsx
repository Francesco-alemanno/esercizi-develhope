import { useEffect, useState } from "react"

export function Timer(){
const [timer,setTimer]=useState(new Date())
const [idInterval, setIdInterval]=useState(null)


useEffect(()=>{

  return ()=>  clearInterval(idInterval)

}, [idInterval])


const handleStart= ()=>{
    if(!idInterval){
        const time= setInterval(() => {
            setTimer(new Date())
        }, 1000);  
        setIdInterval(time)
    }



}

const handleStop= ()=>{
clearInterval(idInterval)
}
    return (
        <div>
            <h1>Timer:{timer.toLocaleTimeString()}</h1>
            <button onClick={handleStart}>Start Timer</button>
            <button onClick={handleStop}>Stop Timer</button>
        </div>
    )
}