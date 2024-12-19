import { useEffect, useState } from "react";

export function FakeUser() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://fakerapi.it/api/v1/users?_quantity=18&_locale=it_IT&_seed=12456"
        );
        if (!response.ok) {
          throw new Error("Errore nel fetching dei dati");
        }
        const data = await response.json();
        const arrUsersApi = data.data;
        setUsers(arrUsersApi);

        const existData = localStorage.getItem("users");
        const utentiRegistrati = JSON.parse(existData);
        if (utentiRegistrati) {
          setUsers([...arrUsersApi, ...utentiRegistrati]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFunction();
  }, []);

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