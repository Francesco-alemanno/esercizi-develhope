import { useEffect, useRef } from "react"
import { useState } from "react"

 function Email(){


    const emailRef= useRef()
    const [errore,setErrore]=useState('')
    const [validazione,setValidazione]=useState('')

    const handleSubmit= (event)=>{
        event.preventDefault()
        const email=emailRef.current.value
        if(!email.includes('@') || !email.includes('.')){
            setErrore('formato non valido')
            setValidazione('')
        }else{
            setErrore('')
            setValidazione(email)
        }
    }

    // useEffect(()=>{
    //     if(validazione){
    //         if(!validazione.includes('@') || !validazione.includes('.')){
    //             setErrore('Formato email non valido')
    //         } else{
    //             setErrore('')
    //         }

    //     }

    // },[validazione])


    return(
        <form onSubmit={handleSubmit} >
            <input type="text"  ref={emailRef}/>
            <button type="submit"> Invia</button>
            {errore ? (<p>{errore}</p>) : (validazione && <p>{validazione}</p>) }
        </form>
    )
}
export default Email