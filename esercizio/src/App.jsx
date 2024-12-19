
import './App.css'
import { Dashboard } from './Dashboard'
import { Login } from './Login'
import { Registrazione } from './Registrazione'
import { FakeUser } from './FakeUser'
import { UserProvider } from './UserContext'


function App() {
 
  return (
   <UserProvider>
  <FakeUser></FakeUser>
    <Registrazione></Registrazione>
    <Login></Login>
    <Dashboard></Dashboard>
   </UserProvider>
  
    
    
  );
}

export default App
