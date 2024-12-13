import { useState } from "react"

export function Login(){

const [data,setData]=useState({
    email:'',
    password:'',
})
 const [messaggio, setMessaggio]=useState('')
const handleChange=(event)=>{
    const {name,value}= event.target 
   
    setData((prevData)=>({
    ...prevData, [name]:value
    }))
    
  } 

    const handleLogin= (event)=>{
        event.preventDefault()
     const users= localStorage.getItem('users')
   const parseUsers= JSON.parse(users)
   const userExist= parseUsers.some((x)=>x.email===data.email && x.password ===data.password)

   if(userExist){
setMessaggio('login effettuato con successo')
const isLogged= localStorage.setItem('isLogged' ,true)
   }else{
    setMessaggio('credenziali errate')
    
   }
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="" >Email:</label>
                <input type="email" name="email" onClick={handleChange} />
                <label htmlFor="">Password</label>
                <input type='password' name="password" onClick={handleChange}/>
            <button type="submit" >Login</button>
            {messaggio && (<p style={{color:'red'}}>{messaggio}</p>) }

            </form>
        </div>
    )
}