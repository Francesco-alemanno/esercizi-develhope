
import './App.css'
import { Dashboard } from './Dashboard'
import { Login } from './Login'
import { Registrazione } from './Registrazione'
import { UserProvider } from './UserContext'
import { FakeUser } from './FakeUser'


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
