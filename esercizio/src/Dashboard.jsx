import { useContext } from "react";
import { UserContext } from "./UserContext";
import { FakeUser } from "./FakeUser";

export function Dashboard() {
  const { logout, userLogged } = useContext(UserContext);

  return (
    <>
      {userLogged ? (
        <>
          <p>ciao {userLogged.nome} </p>
          <div>
            <span>Nome: </span> <span>{userLogged.nome}</span>
          </div>
          <div>
            <span>Cognome:</span> <span>{userLogged.cognome}</span>
          </div>
          <div>
            <span>Email: </span> <span>{userLogged.email}</span>
          </div>
          <button onClick={logout}>Logout</button>
          <div>
            <h2>Lista utenti registrati:</h2>
<FakeUser></FakeUser> 
         </div>
        </>
      ) : (
        <p>Nessun utente effettua il login</p>
      )}
    </>
  );
}
