import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>findBy and findAllBy</h1>
      {data ? <h2>data found</h2> : <h2>No data found</h2>}
    </div>
  );
}

export default App;
