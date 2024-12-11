import { useEffect, useRef } from "react"

export function FocusableInput(){
const inputRef=useRef(null)
const mountedRef=useRef(false)
useEffect(()=>{
if(!mountedRef.current){
    mountedRef.current=true
console.log('mounting for the first time')
} else{
    console.log('mounting again for debug purposes')

}

inputRef.current?.focus()

},[])


    return(
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}