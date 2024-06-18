import "./App.css";

function App() {
  let login = true;

  return (
    <div className="App">
      <h1>queryBy and queryAllBy</h1>
      {login ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
}

export default App;
