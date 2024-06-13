import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  return (
    <div className="App">
      <h1>Test onChange Event with Input Text</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
}

export default App;
