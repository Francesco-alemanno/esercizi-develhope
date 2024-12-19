import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export function FakeUser() {
  const [users, setUsers] = useState([]);

const {data, loading}=useFetch("https://fakerapi.it/api/v1/users?_quantity=18&_locale=it_IT&_seed=12456")

        const arrUsersApi = data.data;
        setUsers(arrUsersApi);

        const existData = localStorage.getItem("users");
        const utentiRegistrati = JSON.parse(existData);
        if (utentiRegistrati) {
          setUsers([...arrUsersApi, ...utentiRegistrati]);
        }
     

  return (
    <>
      <div>
        {loading && <p>Caricamento dati in corso...</p>}
        {error && <p>{error}</p>}
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}