import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>RTL Query: getByLabelText</h1>
      <label htmlFor="user-name">Username</label>
      <input type="text" id="user-name" defaultValue="shahrukh" />
      <label htmlFor="skills">Skills</label>
      <input type="checkbox" id="skills" />
    </div>
  );
}

export default App;
