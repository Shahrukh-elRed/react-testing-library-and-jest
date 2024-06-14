import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  return (
    <div className="App">
      <h1>Snapshot Testing</h1>
      <button onClick={() => setData("hello")}>Update Data</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
