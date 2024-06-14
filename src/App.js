import { useState } from "react";
import "./App.css";
import { handleOtherMethod } from "./helpers";

function App() {
  const [data, setData] = useState("");

  const handleData = () => {
    setData("hello");
  };

  return (
    <div className="App">
      <h1>Functional Component methods testing</h1>
      <button data-testid="btn1" onClick={handleData}>
        Update
      </button>
      <button data-testid="btn2" onClick={handleOtherMethod}>
        Print
      </button>
      <h2>{data}</h2>
    </div>
  );
}

export default App;
