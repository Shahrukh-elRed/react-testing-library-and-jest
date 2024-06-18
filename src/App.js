import "./App.css";

function App({ testFunction }) {
  return (
    <div className="App">
      <h1>Functional Props Testing and Mocking</h1>
      <button onClick={testFunction}>Click</button>
    </div>
  );
}

export default App;
