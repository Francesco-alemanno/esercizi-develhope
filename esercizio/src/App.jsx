
import { useState } from 'react'
import './App.css'
import { Dashboard } from './Dashboard'
import { Login } from './Login'
import { Registrazione } from './Registrazione'
import { useEffect } from 'react'
import { UserProvider } from './UserContext'


function App() {
 
  return (
   <UserProvider>
    
    <Registrazione></Registrazione>
    <Login></Login>
    <Dashboard></Dashboard>
    
     </UserProvider>
  );
}

export default App
