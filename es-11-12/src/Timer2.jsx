import { useRef } from "react"

export function Timer2 (){

    const timerRef=useRef(null)
const idRef=useRef(null)
const secondiRef=useRef(0)

    const handleStart =()=>{
if(idRef.current===null){
    idRef.current=setInterval(()=>{
        secondiRef.current +=1
        if(timerRef.current){
            timerRef.current.textContent=`Timer: ${secondiRef.current}` 
        }
    },1000)
}
    }
    const handleReset= ()=>{
        if(idRef.current!==null){
            clearInterval(idRef.current)
            idRef.current=null
            secondiRef.current=0
            if(timerRef){
                timerRef.current.textContent=`Timer: ${secondiRef.current}`

            }
            
        }
    }

    return (
        <div>
 
            <h1 ref={timerRef}>Timer:0</h1>
            <button onClick={handleStart}>Start Timer</button>
            <button onClick={handleReset}>Stop Timer</button>
        

        </div>
    )
}