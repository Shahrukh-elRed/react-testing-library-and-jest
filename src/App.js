import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    result = await result.json();
    setData(result);
  };

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
