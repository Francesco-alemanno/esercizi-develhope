import { useContext } from "react"
import { Conteggio } from "./App"

export function Counter(){

    const {counter, setCounter}=useContext(Conteggio)
    const handleStart=()=>{
        setCounter(counter+1)
    }
    return(
        <div>
<h2>{counter}</h2>
<button onClick={handleStart}>CLICCAMI PER INCREMENTARE DI UNO</button>
        </div>
    )
}