import { useState } from "react"
import { createContext } from "react"
import { Counter } from "./Counter"

export const Conteggio= createContext()
function App() {
const [counter, setCounter]= useState(0)
return (
<Conteggio.Provider value={{counter,setCounter}}>
<Counter></Counter>
</Conteggio.Provider>
)
}

export default App
