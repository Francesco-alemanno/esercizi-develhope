
import './App.css'
import { Dashboard } from './Dashboard'
import { Login } from './Login'
import { Registrazione } from './Registrazione'


function App() {
const isLogged=localStorage.getItem('isLogged')
  return (
    <>
<Registrazione></Registrazione> 
{isLogged? <Dashboard></Dashboard> : <Login></Login> }

   </>
  )
}

export default App
